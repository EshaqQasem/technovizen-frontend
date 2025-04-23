"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <div className="container max-w-3xl">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-9xl font-bold text-primary">404</h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">الصفحة غير موجودة</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
              عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" className="hover-lift">
                <Link href="/">
                  <Home className="ml-2 h-5 w-5" />
                  العودة للصفحة الرئيسية
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
             
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12"
          >
          </motion.div>

          {/* Animated elements */}
          <div className="relative mt-16">
            <motion.div
              className="absolute left-1/4 transform -translate-x-1/2"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/20 rounded-full" />
            </motion.div>

            <motion.div
              className="absolute right-1/4 transform translate-x-1/2"
              animate={{
                y: [0, -20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full" />
            </motion.div>

            <motion.div
              className="absolute left-1/3 top-12 transform -translate-x-1/2"
              animate={{
                y: [0, -10, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 bg-primary/30 rounded-full" />
            </motion.div>

            <motion.div
              className="absolute right-1/3 top-8 transform translate-x-1/2"
              animate={{
                y: [0, -12, 0],
                x: [0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <div className="w-4 h-4 md:w-6 md:h-6 bg-primary/20 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

