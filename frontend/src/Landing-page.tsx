import { ReactNode, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Leaf, Trash2, Droplet, CloudRain, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import botolsampah from "./assets/botolsampah.jpg"
import gambargis from "./assets/kartungis.jpg"
import Navbar from "@/components/navbar"

interface IssueCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  delay?: number;
}

// interface StatCounterProps {
//   value: string;
//   label: string;
//   delay?: number;
// }

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}
// Komponen untuk teks yang muncul saat di-scroll
const AnimatedText = ({ children, delay = 0, className = "" }: AnimatedTextProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

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
  )
}

// Komponen untuk statistik dengan animasi counter
// const StatCounter = ({ value, label, delay = 0 }: StatCounterProps) => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.5 })
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
//         hidden: { opacity: 0, scale: 0.8 },
//         visible: { opacity: 1, scale: 1 },
//       }}
//       transition={{ duration: 0.6, delay }}
//       className="flex flex-col items-center"
//     >
//       <motion.span
//         className="text-4xl md:text-5xl font-bold text-primary"
//         initial={{ opacity: 0 }}
//         animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//         transition={{ duration: 2 }}
//       >
//         {value}
//       </motion.span>
//       <span className="text-sm md:text-base text-muted-foreground mt-2">{label}</span>
//     </motion.div>
//   )
// }

// Komponen untuk kartu isu lingkungan
const IssueCard = ({ icon: Icon, title, description, delay = 0 }:IssueCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

export default function LandingPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const handleScrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            {/* image */}
            <div style={{ height: "680px", width: "1366px", overflow: "hidden" }}>
            <img
              src={botolsampah}
              alt="Example"
              style={{ height: "100%", width: "100%", objectFit: "cover", filter: "blur(2px) brightness(60%)" }}
            />
          </div>
            {/* <div className="w-[1366px] h-[768px] bg-slate-400 bg-cover" style={{ backgroundImage: `url(${bumihijau})`}}></div> */}
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Bumi Kita, <span className="text-primary">Tanggung Jawab Kita</span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Mari bergabung dalam upaya menjaga lingkungan hidup dan menciptakan masa depan yang lebih hijau untuk
              generasi mendatang.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to='/data-spasial'>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Jelajahi Peta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
            >
              Pelajari Lebih Lanjut
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, delay: 1, repeat: Number.POSITIVE_INFINITY }}
          onClick={handleScrollDown}
        >
          <ChevronDown className="h-10 w-10 text-white" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section ref={scrollRef} className="py-20 bg-primary/5 dark:bg-gray-900 flex justify-center">
        <div className="containe px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedText delay={0.1}>
              <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                <Leaf className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Tentang Ecoradar</span>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Memantau dan Mengatasi Isu Lingkungan di Kota Medan
              </h2>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <p className="text-lg text-muted-foreground">
                Ecoradar adalah platform yang didedikasikan untuk memantau, melaporkan, dan mengatasi isu-isu
                lingkungan di Kota Medan. Dengan data yang akurat dan visualisasi yang interaktif, kami membantu
                masyarakat dan pemerintah untuk mengambil tindakan yang tepat.
              </p>
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IssueCard
              icon={Trash2}
              title="Pengelolaan Sampah"
              description="Memantau lokasi dan kondisi tempat sampah untuk memastikan pengelolaan sampah yang efektif dan mencegah pencemaran lingkungan."
              delay={0.2}
            />
            <IssueCard
              icon={Droplet}
              title="Pencemaran Sungai"
              description="Mengidentifikasi sungai-sungai yang tercemar dan tingkat pencemarannya untuk mendorong upaya pemulihan dan perlindungan sumber daya air."
              delay={0.4}
            />
            <IssueCard
              icon={CloudRain}
              title="Kawasan Rawan Banjir"
              description="Memetakan kawasan rawan banjir untuk meningkatkan kesiapsiagaan dan mengurangi dampak bencana pada masyarakat dan lingkungan."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      {/* <section className="py-20 bg-primary/5 flex justify-center">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedText delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Dampak Kita Terhadap Lingkungan</h2>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <p className="text-lg text-muted-foreground">
                Setiap tindakan kecil memiliki dampak besar. Bersama-sama, kita dapat membuat perubahan yang berarti
                untuk lingkungan.
              </p>
            </AnimatedText>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value="8.3M" label="Ton sampah plastik di lautan setiap tahun" delay={0.2} />
            <StatCounter value="40%" label="Sungai di Indonesia tercemar berat" delay={0.4} />
            <StatCounter value="350K" label="Hektar hutan hilang setiap tahun" delay={0.6} />
            <StatCounter value="78%" label="Kota di Indonesia rawan banjir" delay={0.8} />
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary/90 to-primary/70 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Bergabunglah Dalam Perubahan</h2>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <p className="text-xl mb-8">
                Bersama-sama, kita dapat menciptakan lingkungan yang lebih bersih, lebih sehat, dan lebih berkelanjutan
                untuk generasi mendatang.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Mulai Sekarang
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 flex justify-center">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedText delay={0.1}>
                <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                  <span className="text-sm font-medium text-primary">Fitur Utama</span>
                </div>
              </AnimatedText>

              <AnimatedText delay={0.3}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Visualisasi Data Interaktif untuk Pemahaman yang Lebih Baik
                </h2>
              </AnimatedText>

              <AnimatedText delay={0.5}>
                <p className="text-lg text-muted-foreground mb-8">
                  Ecoradar menyediakan visualisasi data yang interaktif dan mudah dipahami, memungkinkan Anda untuk:
                </p>
              </AnimatedText>

              <div className="space-y-4">
                <AnimatedText delay={0.6}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Melihat Peta Interaktif</h3>
                      <p className="text-muted-foreground">
                        Jelajahi peta interaktif yang menampilkan lokasi tempat sampah, sungai tercemar, dan kawasan
                        rawan banjir.
                      </p>
                    </div>
                  </div>
                </AnimatedText>

                <AnimatedText delay={0.7}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Filter Data Berdasarkan Kategori</h3>
                      <p className="text-muted-foreground">
                        Filter data berdasarkan jenis, kondisi, lokasi, dan parameter lainnya untuk analisis yang lebih
                        mendalam.
                      </p>
                    </div>
                  </div>
                </AnimatedText>

                <AnimatedText delay={0.8}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Akses Data Real-time</h3>
                      <p className="text-muted-foreground">
                        Dapatkan informasi terkini tentang kondisi lingkungan di sekitar Anda untuk pengambilan
                        keputusan yang lebih baik.
                      </p>
                    </div>
                  </div>
                </AnimatedText>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <div style={{ height: "500px", width: "600px", overflow: "hidden" }}>
            <img
              src={gambargis}
              alt="Example"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
                {/* <div className="w-[1920px] h-[1080px] bg-slate-400"></div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gray-50 dark:bg-gray-800 flex justify-center">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedText delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Apa Kata Mereka Tentang Ecoradar</h2>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <p className="text-lg text-muted-foreground">
                Dengarkan pengalaman dari para pengguna dan mitra kami dalam menggunakan Ecoradar untuk mengatasi isu
                lingkungan.
              </p>
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedText delay={0.4}>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                  <div className="ml-4">
                    <h4 className="font-bold">Ahmad Fauzi</h4>
                    <p className="text-sm text-muted-foreground">Aktivis Lingkungan</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "Ecoradar telah membantu kami mengidentifikasi hotspot pencemaran sungai dan mengorganisir kegiatan
                  pembersihan yang lebih efektif. Platform ini sangat intuitif dan kaya data."
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.6}>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                  <div className="ml-4">
                    <h4 className="font-bold">Siti Rahayu</h4>
                    <p className="text-sm text-muted-foreground">Kepala Dinas Lingkungan Hidup</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "Dengan Ecoradar, kami dapat memantau kondisi tempat sampah di seluruh kota dan mengalokasikan sumber
                  daya dengan lebih efisien. Ini adalah alat yang sangat berharga bagi kami."
                </p>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.8}>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                  <div className="ml-4">
                    <h4 className="font-bold">Budi Santoso</h4>
                    <p className="text-sm text-muted-foreground">Warga Peduli Lingkungan</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "Sebagai warga yang tinggal di kawasan rawan banjir, Ecoradar memberikan informasi yang sangat
                  berharga untuk kesiapsiagaan kami. Visualisasi datanya sangat membantu."
                </p>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 flex justify-center">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedText delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Untuk Berkontribusi Pada Lingkungan?</h2>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <p className="text-xl text-muted-foreground mb-8">
                Bergabunglah dengan ribuan orang yang telah menggunakan Ecoradar untuk membuat perubahan positif bagi
                lingkungan.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <Link to="/data-spasial">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Mulai Jelajahi Peta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
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
              <p className="text-gray-400">Platform untuk memantau dan mengatasi isu lingkungan di Kota Medan.</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Fitur</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Peta Interaktif
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Analisis Data
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Tentang Kami</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                    Tentang Ecoradar
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors">
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
            <p>&copy; {new Date().getFullYear()} Ecoradar. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
