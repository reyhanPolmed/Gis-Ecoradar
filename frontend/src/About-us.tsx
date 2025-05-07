"use client";

import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
// import Image from "next/image"
import Navbar from "@/components/navbar";
import { Leaf, Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  delay: number;
  index: number;
}

// interface TimelineItemProps {
//     year: string,
//     title: string,
//     description: string,
//     isLast?: boolean,
//     delay: number
// }

// interface ValueCardProps {
//     icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
//     title: string,
//     description: string,
//     delay: number
// }
// Komponen untuk teks yang muncul saat di-scroll
const AnimatedText = ({
  children,
  delay = 0,
  className = "",
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Komponen untuk anggota tim dengan animasi foto
const TeamMember = ({ name, role, delay = 0, imageSrc }: TeamMemberProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animasi yang berbeda untuk setiap anggota tim
  // const getAnimationVariant = () => {
  //   switch (index % 4) {
  //     case 0:
  //       return {
  //         hidden: { opacity: 0, scale: 0.8, y: 20 },
  //         visible: { opacity: 1, scale: 1, y: 0 },
  //         hover: { y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" },
  //       }
  //     case 1:
  //       return {
  //         hidden: { opacity: 0, scale: 0.8, x: -20 },
  //         visible: { opacity: 1, scale: 1, x: 0 },
  //         hover: { rotate: [0, 2, -2, 0], transition: { repeat: 0 } },
  //       }
  //     case 2:
  //       return {
  //         hidden: { opacity: 0, scale: 0.8, x: 20 },
  //         visible: { opacity: 1, scale: 1, x: 0 },
  //         hover: { scale: 1.05 },
  //       }
  //     case 3:
  //       return {
  //         hidden: { opacity: 0, scale: 0.8, y: -20 },
  //         visible: { opacity: 1, scale: 1, y: 0 },
  //         hover: { y: -5, x: 5 },
  //       }
  //     default:
  //       return {
  //         hidden: { opacity: 0, scale: 0.8 },
  //         visible: { opacity: 1, scale: 1 },
  //         hover: { y: -10 },
  //       }
  //   }
  // }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group w-[24%]"
    >
      <div className="relative h-80 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          {/* foto anggota */}
          <div style={{ height: "350px", width: "300px", overflow: "hidden" }}>
            <img
              src={imageSrc}
              alt="Example"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-2">
            <motion.a
              href="#"
              className="bg-white/20 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              className="bg-white/20 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              className="bg-white/20 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-muted-foreground">{role}</p>
      </div>
    </motion.div>
  );
};

// Komponen untuk nilai perusahaan
// const ValueCard = ({ icon: Icon, title, description, delay = 0 }: ValueCardProps) => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.3 })
//   const controls = useAnimation()

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible")
//     }
//   }, [isInView, controls])

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, y: 30 },
//         visible: { opacity: 1, y: 0 },
//       }}
//       transition={{ duration: 0.6, delay }}
//       className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//     >
//       <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
//         <Icon className="h-6 w-6 text-primary" />
//       </div>
//       <h3 className="text-xl font-bold mb-2">{title}</h3>
//       <p className="text-muted-foreground">{description}</p>
//     </motion.div>
//   )
// }

// Komponen untuk timeline
// const TimelineItem = ({ year, title, description, isLast = false, delay = 0 }: TimelineItemProps) => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.3 })
//   const controls = useAnimation()

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible")
//     }
//   }, [isInView, controls])

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0 },
//       }}
//       transition={{ duration: 0.6, delay }}
//       className="relative pl-8 pb-8"
//     >
//       {!isLast && <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-primary/30 dark:bg-primary/20"></div>}
//       <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
//         <div className="w-2 h-2 rounded-full bg-white"></div>
//       </div>
//       <div className="text-sm font-semibold text-primary mb-1">{year}</div>
//       <h3 className="text-lg font-bold mb-2">{title}</h3>
//       <p className="text-muted-foreground">{description}</p>
//     </motion.div>
//   )
// }

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Data anggota tim
  const teamMembers = [
    {
      name: "Adrian Lase",
      role: "Founder & CEO",
      imageSrc:
        "https://res.cloudinary.com/dfcpydoq8/image/upload/v1746518391/foto_adrian_ixcwto.jpg",
    },
    {
      name: "Alex sandro Sidabukke",
      role: "Environmental Scientist",
      imageSrc:
        "https://res.cloudinary.com/dfcpydoq8/image/upload/v1746432801/foto_alex_zw0m3x.jpg",
    },
    {
      name: "Heikel Timanta G.S",
      role: "Lead Developer",
      imageSrc: "https://res.cloudinary.com/dfcpydoq8/image/upload/v1746433229/foto_heikel_wgkqax.jpg",
    },
    {
      name: "Jon Evansius Situmorang",
      role: "Community Manager",
      imageSrc: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Margaretha Crhisty Silitonga",
      role: "Community Manager",
      imageSrc: "https://res.cloudinary.com/dfcpydoq8/image/upload/v1746433296/foto_emce_s92hqr.jpg",
    },
    {
      name: "Rika Aliefia",
      role: "Community Manager",
      imageSrc: "https://res.cloudinary.com/dfcpydoq8/image/upload/v1746518391/foto_rika_ckl1xb.jpg",
    },
    {
      name: "Reyhan Yonathan Batubara",
      role: "Community Manager",
      imageSrc: "https://res.cloudinary.com/dfcpydoq8/image/upload/v1746433683/foto_reyhan_2_rebulw.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden flex justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
          <div className="w-[1920] h-[600px]"></div>
        </div>

        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tentang <span className="text-primary">Ecoradar</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <p className="text-xl mb-8">
              Kami adalah tim yang berdedikasi untuk menciptakan solusi inovatif
              dalam mengatasi isu-isu lingkungan melalui teknologi pemetaan dan
              analisis data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={handleScrollDown}
            >
              Kenali Tim Kami
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section
        ref={scrollRef}
        className="py-20 bg-white dark:bg-gray-900 flex justify-center"
      >
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText delay={0.1}>
                <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                  <Leaf className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">
                    Visi & Misi
                  </span>
                </div>
              </AnimatedText>

              <AnimatedText delay={0.3}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Menciptakan Masa Depan yang Lebih Hijau
                </h2>
              </AnimatedText>

              <AnimatedText delay={0.5}>
                <p className="text-lg text-muted-foreground mb-6">
                  Visi kami adalah menciptakan dunia di mana teknologi dan
                  kesadaran lingkungan berjalan beriringan untuk mengatasi
                  tantangan lingkungan yang kita hadapi saat ini.
                </p>
              </AnimatedText>

              <AnimatedText delay={0.7}>
                <p className="text-lg text-muted-foreground">
                  Misi kami adalah menyediakan alat dan data yang akurat untuk
                  membantu masyarakat, pemerintah, dan organisasi dalam
                  mengambil keputusan yang tepat untuk pelestarian lingkungan
                  dan pembangunan berkelanjutan.
                </p>
              </AnimatedText>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="w-[600px] h-[500px]"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 flex justify-center">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedText delay={0.1}>
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-medium text-primary">
                  Tim Kami
                </span>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bertemu dengan Para Ahli di Balik Ecoradar
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <p className="text-lg text-muted-foreground">
                Tim kami terdiri dari para profesional yang berdedikasi dengan
                keahlian di bidang lingkungan, teknologi, dan pembangunan
                berkelanjutan.
              </p>
            </AnimatedText>
          </div>

          <div className="flex justify-center flex-wrap gap-x-4 gap-y-20 box-border">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                delay={0.2 + index * 0.1}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      {/* <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedText delay={0.1}>
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-medium text-primary">Nilai-Nilai Kami</span>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prinsip yang Memandu Kami</h2>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <p className="text-lg text-muted-foreground">
                Nilai-nilai ini menjadi landasan dari setiap keputusan dan tindakan yang kami ambil dalam upaya
                melestarikan lingkungan.
              </p>
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={Leaf}
              title="Keberlanjutan"
              description="Kami berkomitmen untuk mendukung praktik berkelanjutan yang memenuhi kebutuhan saat ini tanpa mengorbankan kemampuan generasi mendatang."
              delay={0.2}
            />
            <ValueCard
              icon={Mail}
              title="Transparansi"
              description="Kami percaya pada keterbukaan dan kejujuran dalam semua aspek pekerjaan kami, dari pengumpulan data hingga pelaporan."
              delay={0.4}
            />
            <ValueCard
              icon={MapPin}
              title="Aksi Lokal"
              description="Kami fokus pada solusi yang disesuaikan dengan kebutuhan lokal, memahami bahwa setiap komunitas memiliki tantangan lingkungan yang unik."
              delay={0.6}
            />
          </div>
        </div>
      </section> */}

      {/* Timeline Section */}
      {/* <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedText delay={0.1}>
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Perjalanan Kami</span>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tonggak Sejarah Ecoradar</h2>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <p className="text-lg text-muted-foreground">
                Perjalanan kami dalam menciptakan solusi untuk isu-isu lingkungan telah melewati berbagai tahap penting.
              </p>
            </AnimatedText>
          </div>

          <div className="max-w-3xl mx-auto">
            <TimelineItem
              year="2018"
              title="Awal Mula"
              description="Ecoradar didirikan sebagai proyek kecil oleh sekelompok aktivis lingkungan dan pengembang teknologi yang peduli dengan isu-isu lingkungan di Indonesia."
              delay={0.2}
            />
            <TimelineItem
              year="2019"
              title="Peluncuran Platform"
              description="Versi pertama platform Ecoradar diluncurkan, fokus pada pemetaan tempat sampah dan titik-titik pencemaran di kota-kota besar."
              delay={0.4}
            />
            <TimelineItem
              year="2020"
              title="Ekspansi Fitur"
              description="Penambahan fitur pemetaan sungai tercemar dan kawasan rawan banjir, serta peningkatan kemampuan analisis data."
              delay={0.6}
            />
            <TimelineItem
              year="2022"
              title="Kemitraan Strategis"
              description="Menjalin kemitraan dengan pemerintah daerah dan organisasi lingkungan untuk memperluas jangkauan dan dampak platform."
              delay={0.8}
              isLast={true}
            />
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary/90 to-primary/70 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bergabunglah dengan Misi Kami</h2>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <p className="text-xl mb-8">
                Bersama-sama, kita dapat menciptakan perubahan positif untuk lingkungan dan masa depan yang lebih baik.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Hubungi Kami
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Jelajahi Peta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900 flex justify-center">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedText delay={0.1}>
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <span className="text-sm font-medium text-primary">Kontak</span>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hubungi Kami
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <p className="text-lg text-muted-foreground">
                Jika Anda memiliki pertanyaan atau ingin berkolaborasi dengan
                kami, jangan ragu untuk menghubungi kami.
              </p>
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedText delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Alamat</h3>
                <p className="text-muted-foreground">
                  Jl. Lingkungan Hijau No. 123, Jakarta
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.4}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@ecoradar.id</p>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.6}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Telepon</h3>
                <p className="text-muted-foreground">+62 21 1234 5678</p>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-4 flex justify-center">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Leaf className="h-6 w-6 text-primary mr-2" />
                <span className="font-bold text-xl">Ecoradar</span>
              </div>
              <p className="text-gray-400">
                Platform untuk memantau dan mengatasi isu lingkungan di Kota
                Medan.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Fitur</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Peta Interaktif
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Analisis Data
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Tentang Kami</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tentang Ecoradar
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tim Kami
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Hubungi Kami</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">info@Ecoradar.id</li>
                <li className="text-gray-400">+62 21 1234 5678</li>
                <li className="text-gray-400">Jl. Almamater No. 1, Medan</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Ecoradar. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
