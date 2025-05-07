"use client";

import { useEffect, useState } from "react";
import {
  useGetTrashBinsQuery,
  useGetPollutedRiversQuery,
  useGetFloodAreasQuery,
  type TrashBin,
  type PollutedRiver,
  type FloodArea,
} from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Loader2,
  AlertTriangle,
  Users,
  BarChart3,
  Search,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Map from "@/components/map";

type DataType = "trashBins" | "pollutedRivers" | "floodAreas";

export default function MapView() {
  const { data: trashBins, isLoading: isLoadingTrashBins } =
    useGetTrashBinsQuery();
  const { data: pollutedRivers, isLoading: isLoadingPollutedRivers } =
    useGetPollutedRiversQuery();
  const { data: floodAreas, isLoading: isLoadingFloodAreas } =
    useGetFloodAreasQuery();

  // State for active data type
  const [activeDataType, setActiveDataType] = useState<DataType>("trashBins");

  // State for filters
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Trash bin specific filters
  // const [kecamatanFilter, setKecamatanFilter] = useState("all");
  const [kondisiFilter, setKondisiFilter] = useState("all");

  // Polluted river specific filters
  const [tingkatPencemaranFilter, setTingkatPencemaranFilter] = useState("all");

  // Flood area specific filters
  const [tingkatRisikoFilter, setTingkatRisikoFilter] = useState("all");

  // Selected items
  const [selectedTrashBin, setSelectedTrashBin] = useState<TrashBin | null>(
    null
  );
  const [selectedRiver, setSelectedRiver] = useState<PollutedRiver | null>(
    null
  );
  const [selectedFloodArea, setSelectedFloodArea] = useState<FloodArea | null>(
    null
  );

  // Filtered data
  const [filteredTrashBins, setFilteredTrashBins] = useState<TrashBin[]>([]);
  const [filteredRivers, setFilteredRivers] = useState<PollutedRiver[]>([]);
  const [filteredFloodAreas, setFilteredFloodAreas] = useState<FloodArea[]>([]);

  // State baru untuk mengontrol dropdown Filter Data
  const [filterDataOpen, setFilterDataOpen] = useState(false);

  // Initialize filtered data when data is loaded
  useEffect(() => {
    if (trashBins && trashBins.length > 0) {
      setFilteredTrashBins(trashBins);
    }
    if (pollutedRivers && pollutedRivers.length > 0) {
      setFilteredRivers(pollutedRivers);
    }
    if (floodAreas && floodAreas.length > 0) {
      setFilteredFloodAreas(floodAreas);
    }
  }, [trashBins, pollutedRivers, floodAreas]);

  // Apply filters when filter values change
  useEffect(() => {
    filterTrashBins();
  }, [trashBins, kondisiFilter, searchQuery]);

  useEffect(() => {
    filterPollutedRivers();
  }, [pollutedRivers, tingkatPencemaranFilter, searchQuery]);

  useEffect(() => {
    filterFloodAreas();
  }, [floodAreas, tingkatRisikoFilter, searchQuery]);

  // Filter functions
  const filterTrashBins = () => {
    if (!trashBins) return;

    let filtered = [...trashBins];

    // Filter by kecamatan
    // if (kecamatanFilter !== "all") {
    //   filtered = filtered.filter((bin) => bin.kecamatan === kecamatanFilter);
    // }

    // Filter by kondisi
    if (kondisiFilter !== "all") {
      filtered = filtered.filter(
        (bin) => bin.kondisi?.toLowerCase() === kondisiFilter
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery?.toLowerCase();
      filtered = filtered.filter(
        (bin) =>
          bin.nama?.toLowerCase().includes(query) ||
          bin.alamat?.toLowerCase().includes(query) ||
          bin.kecamatan?.toLowerCase().includes(query)
      );
    }

    setFilteredTrashBins(filtered);
  };

  const filterPollutedRivers = () => {
    if (!pollutedRivers) return;

    let filtered = [...pollutedRivers];

    // Filter by tingkat pencemaran
    if (tingkatPencemaranFilter !== "all") {
      filtered = filtered.filter(
        (river) =>
          river.tingkat_pencemaran?.toLowerCase() === tingkatPencemaranFilter
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery?.toLowerCase();
      filtered = filtered.filter(
        (river) =>
          river.nama_sungai?.toLowerCase().includes(query) ||
          river.jenis_pencemaran?.toLowerCase().includes(query)
      );
    }

    setFilteredRivers(filtered);
  };

  const filterFloodAreas = () => {
    if (!floodAreas) return;

    let filtered = [...floodAreas];

    // Filter by tingkat risiko
    if (tingkatRisikoFilter !== "all") {
      filtered = filtered.filter(
        (area) => area.tingkat_risiko?.toLowerCase() === tingkatRisikoFilter
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery?.toLowerCase();
      filtered = filtered.filter(
        (area) =>
          area.nama_kawasan?.toLowerCase().includes(query) ||
          area.kecamatan?.toLowerCase().includes(query) ||
          area.kelurahan?.toLowerCase().includes(query)
      );
    }

    setFilteredFloodAreas(filtered);
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Handle item selection based on active data type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleItemSelect = (item: any) => {
    if (activeDataType === "trashBins") {
      setSelectedTrashBin(item);
      setSelectedRiver(null);
      setSelectedFloodArea(null);
    } else if (activeDataType === "pollutedRivers") {
      setSelectedTrashBin(null);
      setSelectedRiver(item);
      setSelectedFloodArea(null);
    } else if (activeDataType === "floodAreas") {
      setSelectedTrashBin(null);
      setSelectedRiver(null);
      setSelectedFloodArea(item);
    }
  };

  if (isLoadingTrashBins || isLoadingPollutedRivers || isLoadingFloodAreas) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Memuat data peta...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 p-2 gap-y-2">
      {/* Stats Cards */}
      <div className="flex w-full gap-x-3">
        <Card className="w-full h-[130px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">Tempat Sampah</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent className="-mt-2 flex flex-col gap-1">
            <div className="text-2xl font-bold">{trashBins?.length || 0}</div>
            <p className="text-xs text-muted-foreground">Di seluruh kota</p>
          </CardContent>
        </Card>
        <Card className="w-full h-[130px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">
              Sungai Tercemar
            </CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent className="-mt-2 flex flex-col gap-1">
            <div className="text-2xl font-bold">
              {pollutedRivers?.length || 0}
            </div>
            <p className="text-xs text-muted-foreground">Perlu penanganan</p>
          </CardContent>
        </Card>
        <Card className="w-full h-[130px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium">
              Kawasan Banjir
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent className="-mt-2 flex flex-col gap-1">
            <div className="text-2xl font-bold">{floodAreas?.length || 0}</div>
            <p className="text-xs text-muted-foreground">Area rawan banjir</p>
          </CardContent>
        </Card>
      </div>

      {/* Map with Search */}
      <div className="relative flex-1 rounded-lg ">
        {/* Search Bar */}
        <div className="absolute left-2 right-4 top-2 z-10 flex gap-2 md:right-auto md:w-80">
          <div className="relative flex-1 bg-white rounded-md">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Cari lokasi..."
              className="pl-8 pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Filters Dropdown */}
        <div
          className={`absolute left-2 top-12 overflow-y-hidden overflow-hidden z-20 w-80 h-[370px] bg-white rounded-md border bg-background shadow-lg transition-all duration-300 origin-top ${
            filterOpen
              ? "opacity-100 scale-y-100 translate-y-0 overflow-y-auto"
              : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
          }`}
        >
          {/* Data Type Selector */}
          <div className="p-[6px] py-2 flex justify-between gap-[4px]">
            <Button
              variant={activeDataType === "trashBins" ? "default" : "outline"}
              className="text-[10px] w-[100px] font-bold"
              onClick={() => setActiveDataType("trashBins")}
            >
              TPS
            </Button>
            <Button
              variant={
                activeDataType === "pollutedRivers" ? "default" : "outline"
              }
              className="w-[100px] text-[10px] font-bold"
              onClick={() => setActiveDataType("pollutedRivers")}
            >
              Sungai Tercemar
            </Button>
            <Button
              variant={activeDataType === "floodAreas" ? "default" : "outline"}
              className="w-[100px] text-[10px] font-bold"
              onClick={() => setActiveDataType("floodAreas")}
            >
              Kawasan Banjir
            </Button>
          </div>

          {/* filter Data */}
          <div className="px-2 box-border pb-2">
            <div className="flex flex-col justify-center border border-slate-200 rounded-sm">
              {/* Filter Data Dropdown Button */}
              <div className="">
                <Button
                  variant="outline"
                  className="w-full justify-between border-none"
                  onClick={() => setFilterDataOpen(!filterDataOpen)}
                >
                  Filter Data
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      filterDataOpen ? "rotate-90" : ""
                    }`}
                  />
                </Button>
              </div>

              {/* Filter Options - Trash Bins */}
              {activeDataType === "trashBins" && filterDataOpen && (
                <div className="p-3">
                  {/* Kecamatan filter */}
                  {/* <div className="mb-3">
                    <p className="text-xs font-medium mb-1">Kecamatan:</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge
                        variant={
                          kecamatanFilter === "all" ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setKecamatanFilter("all")}
                      >
                        Semua
                      </Badge>
                      <Badge
                        variant={
                          kecamatanFilter === "Menteng" ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setKecamatanFilter("Menteng")}
                      >
                        Menteng
                      </Badge>
                      <Badge
                        variant={
                          kecamatanFilter === "Tebet" ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setKecamatanFilter("Tebet")}
                      >
                        Tebet
                      </Badge>
                      <Badge
                        variant={
                          kecamatanFilter === "Kemayoran" ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setKecamatanFilter("Kemayoran")}
                      >
                        Kemayoran
                      </Badge>
                    </div>
                  </div> */}

                  {/* Kondisi filter */}
                  <div>
                    <p className="text-xs font-medium mb-1">Kondisi:</p>
                    <div className="flex gap-1">
                      <Badge
                        variant={kondisiFilter === "all" ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setKondisiFilter("all")}
                      >
                        Semua
                      </Badge>
                      <Badge
                        variant={kondisiFilter === "baik" ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setKondisiFilter("baik")}
                      >
                        Baik
                      </Badge>
                      <Badge
                        variant={
                          kondisiFilter === "sedang" ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setKondisiFilter("sedang")}
                      >
                        Sedang
                      </Badge>
                      <Badge
                        variant={
                          kondisiFilter === "buruk" ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setKondisiFilter("buruk")}
                      >
                        Buruk
                      </Badge>
                    </div>
                  </div>
                </div>
              )}

              {/* Filter Options - Polluted Rivers */}
              {activeDataType === "pollutedRivers" && filterDataOpen && (
                <div className="p-3">
                  {/* Tingkat Pencemaran filter */}
                  <div>
                    <p className="text-xs font-medium mb-1">
                      Tingkat Pencemaran:
                    </p>
                    <div className="flex gap-1">
                      <Badge
                        variant={
                          tingkatPencemaranFilter === "all"
                            ? "default"
                            : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setTingkatPencemaranFilter("all")}
                      >
                        Semua
                      </Badge>
                      <Badge
                        variant={
                          tingkatPencemaranFilter === "rendah"
                            ? "default"
                            : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setTingkatPencemaranFilter("rendah")}
                      >
                        Rendah
                      </Badge>
                      <Badge
                        variant={
                          tingkatPencemaranFilter === "sedang"
                            ? "default"
                            : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setTingkatPencemaranFilter("sedang")}
                      >
                        Sedang
                      </Badge>
                      <Badge
                        variant={
                          tingkatPencemaranFilter === "tinggi"
                            ? "default"
                            : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setTingkatPencemaranFilter("tinggi")}
                      >
                        Tinggi
                      </Badge>
                    </div>
                  </div>
                </div>
              )}

              {/* Filter Options - Flood Areas */}
              {activeDataType === "floodAreas" && filterDataOpen && (
                <div className="p-3">
                  {/* Tingkat Risiko filter */}
                  <div>
                    <p className="text-xs font-medium mb-1">Tingkat Risiko:</p>
                    <div className="flex gap-1">
                      <Badge
                        variant={
                          tingkatRisikoFilter === "all" ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setTingkatRisikoFilter("all")}
                      >
                        Semua
                      </Badge>
                      <Badge
                        variant={
                          tingkatRisikoFilter === "rendah" ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setTingkatRisikoFilter("rendah")}
                      >
                        Rendah
                      </Badge>
                      <Badge
                        variant={
                          tingkatRisikoFilter === "sedang" ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setTingkatRisikoFilter("sedang")}
                      >
                        Sedang
                      </Badge>
                      <Badge
                        variant={
                          tingkatRisikoFilter === "tinggi" ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setTingkatRisikoFilter("tinggi")}
                      >
                        Tinggi
                      </Badge>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Filtered Results */}
          <div className="h-[290px] overflow-scroll">
            {/* Trash Bins Results */}
            {activeDataType === "trashBins" &&
            filteredTrashBins &&
            filteredTrashBins.length > 0 ? (
              <div className="p-2 space-y-3">
                {filteredTrashBins.map((bin) => (
                  <div
                    key={bin.id}
                    className="border rounded-md p-3 hover:bg-muted/30 transition-colors cursor-pointer"
                    onClick={() => handleItemSelect(bin)}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{bin.nama}</h3>
                      <Badge
                        className={cn(
                          bin.kondisi?.toLowerCase() === "baik"
                            ? "bg-green-100 text-green-800"
                            : bin.kondisi?.toLowerCase() === "sedang"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        )}
                      >
                        {bin.kondisi}
                      </Badge>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      <p>{bin.alamat}</p>
                      <p>Kecamatan: {bin.kecamatan}</p>
                      <p>
                        Pemeliharaan:{" "}
                        {formatDate(bin.tanggal_pemeliharaan_terakhir)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : activeDataType === "trashBins" ? (
              <div className="p-8 text-center text-muted-foreground">
                <p>Tidak ada tempat sampah yang sesuai dengan filter</p>
              </div>
            ) : null}

            {/* Polluted Rivers Results */}
            {activeDataType === "pollutedRivers" &&
            filteredRivers &&
            filteredRivers.length > 0 ? (
              <div className="p-2 space-y-3">
                {filteredRivers.map((river) => (
                  <div
                    key={river.id}
                    className="border rounded-md p-3 hover:bg-muted/30 transition-colors cursor-pointer"
                    onClick={() => handleItemSelect(river)}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{river.nama_sungai}</h3>
                      <Badge
                        className={cn(
                          river.tingkat_pencemaran?.toLowerCase() === "rendah"
                            ? "bg-green-100 text-green-800"
                            : river.tingkat_pencemaran?.toLowerCase() ===
                              "sedang"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        )}
                      >
                        {river.tingkat_pencemaran}
                      </Badge>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      <p>Jenis: {river.jenis_pencemaran}</p>
                      <p>Panjang: {river.panjang_km} km</p>
                      <p>Status: {river.status_pemulihan}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : activeDataType === "pollutedRivers" ? (
              <div className="p-8 text-center text-muted-foreground">
                <p>Tidak ada sungai tercemar yang sesuai dengan filter</p>
              </div>
            ) : null}

            {/* Flood Areas Results */}
            {activeDataType === "floodAreas" &&
            filteredFloodAreas &&
            filteredFloodAreas.length > 0 ? (
              <div className="p-2 space-y-3">
                {filteredFloodAreas.map((area) => (
                  <div
                    key={area.id}
                    className="border rounded-md p-3 hover:bg-muted/30 transition-colors cursor-pointer"
                    onClick={() => handleItemSelect(area)}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{area.nama_kawasan}</h3>
                      <Badge
                        className={cn(
                          area.tingkat_risiko?.toLowerCase() === "rendah"
                            ? "bg-blue-100 text-blue-800"
                            : area.tingkat_risiko?.toLowerCase() === "sedang"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        )}
                      >
                        {area.tingkat_risiko}
                      </Badge>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      <p>Kecamatan: {area.kecamatan}</p>
                      <p>Kelurahan: {area.kelurahan}</p>
                      <p>Luas: {area.luas_area_ha} ha</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : activeDataType === "floodAreas" ? (
              <div className="p-8 text-center text-muted-foreground">
                <p>Tidak ada kawasan banjir yang sesuai dengan filter</p>
              </div>
            ) : null}
          </div>
        </div>

        {/* Map */}
        <div className="h-full w-full">
          {trashBins && pollutedRivers && floodAreas && (
            <Map
              trashBins={trashBins}
              pollutedRivers={pollutedRivers}
              floodAreas={floodAreas}
              selectedItem={
                activeDataType === "trashBins"
                  ? selectedTrashBin
                  : activeDataType === "pollutedRivers"
                  ? selectedRiver
                  : selectedFloodArea
              }
              onMarkerClick={handleItemSelect}
              activeDataType={activeDataType}
            />
          )}
        </div>
      </div>
    </div>
  );
}
