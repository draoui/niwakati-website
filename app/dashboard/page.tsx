"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Calendar, Heart, MessageSquare, Activity, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import Chart component with SSR disabled
const LineChart = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Line),
  {
    ssr: false,
    loading: () => <div className="h-64 w-full bg-muted animate-pulse rounded-lg"></div>,
  }
);

// Import Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Sample data for dashboard
const dashboardData = {
  stats: {
    volunteers: 120,
    events: 24,
    donations: "€15,250",
    messages: 87
  },
  recentEvents: [
    {
      id: "1",
      title: "Cultural Festival",
      date: "July 8-10, 2023",
      participants: 350
    },
    {
      id: "2",
      title: "Diversity in Action Workshop",
      date: "June 15, 2023",
      participants: 45
    },
    {
      id: "3",
      title: "Youth Leadership Conference",
      date: "August 20, 2023",
      participants: 120
    }
  ],
  recentDonations: [
    {
      id: "1",
      name: "Anonymous",
      amount: "€500",
      date: "July 15, 2023"
    },
    {
      id: "2",
      name: "Marie Dupont",
      amount: "€250",
      date: "July 10, 2023"
    },
    {
      id: "3",
      name: "Jean Mbeki",
      amount: "€100",
      date: "July 5, 2023"
    }
  ]
};

// Chart data
const participantData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Participants",
      data: [65, 78, 90, 110, 125, 180, 210, 250, 220, 190, 230, 280],
      borderColor: "hsl(174, 80%, 36%)",
      backgroundColor: "hsla(174, 80%, 36%, 0.1)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const donationData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Donations (€)",
      data: [1200, 1500, 1300, 1800, 2200, 2500, 2100, 2800, 3000, 2700, 3200, 3500],
      borderColor: "hsl(32, 100%, 50%)",
      backgroundColor: "hsla(32, 100%, 50%, 0.1)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const DashboardPage = () => {
  const [mounted, setMounted] = useState(false);

  // Dashboard section animations
  const dashboardControls = useAnimation();
  const [dashboardRef, dashboardInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    setMounted(true);
    if (dashboardInView) dashboardControls.start("visible");
  }, [dashboardInView, dashboardControls]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="pt-16">
      {/* Dashboard Header */}
      <section className="bg-primary/10 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome to the Ni Wakati ASBL admin dashboard. Here you can monitor organization activities and performance.
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <motion.section
        ref={dashboardRef}
        initial="hidden"
        animate={dashboardControls}
        variants={staggerContainer}
        className="py-12 bg-background"
      >
        <div className="container mx-auto px-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              variants={fadeInUp}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Volunteers</p>
                  <h3 className="text-3xl font-bold mt-1">{dashboardData.stats.volunteers}</h3>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users size={24} className="text-primary" />
                </div>
              </div>
              <div className="mt-4 text-sm text-primary flex items-center">
                <span>View all volunteers</span>
                <ArrowUpRight size={14} className="ml-1" />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Events</p>
                  <h3 className="text-3xl font-bold mt-1">{dashboardData.stats.events}</h3>
                </div>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Calendar size={24} className="text-secondary" />
                </div>
              </div>
              <div className="mt-4 text-sm text-primary flex items-center">
                <span>View all events</span>
                <ArrowUpRight size={14} className="ml-1" />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Donations</p>
                  <h3 className="text-3xl font-bold mt-1">{dashboardData.stats.donations}</h3>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart size={24} className="text-primary" />
                </div>
              </div>
              <div className="mt-4 text-sm text-primary flex items-center">
                <span>View all donations</span>
                <ArrowUpRight size={14} className="ml-1" />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">New Messages</p>
                  <h3 className="text-3xl font-bold mt-1">{dashboardData.stats.messages}</h3>
                </div>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <MessageSquare size={24} className="text-secondary" />
                </div>
              </div>
              <div className="mt-4 text-sm text-primary flex items-center">
                <span>View all messages</span>
                <ArrowUpRight size={14} className="ml-1" />
              </div>
            </motion.div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              variants={fadeInUp}
              className="bg-card rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Participant Growth</h3>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Activity size={20} className="text-primary" />
                </div>
              </div>
              <div className="h-64">
                {mounted && <LineChart data={participantData} options={chartOptions} />}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-card rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Donation Trends</h3>
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Heart size={20} className="text-secondary" />
                </div>
              </div>
              <div className="h-64">
                {mounted && <LineChart data={donationData} options={chartOptions} />}
              </div>
            </motion.div>
          </div>

          {/* Recent Events and Donations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="bg-card rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Recent Events</h3>
                <Link href="/events" className="text-sm text-primary hover:underline flex items-center">
                  View all <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </div>
              <div className="space-y-4">
                {dashboardData.recentEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium">{event.participants}</span>
                      <p className="text-xs text-muted-foreground">Participants</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-card rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Recent Donations</h3>
                <Link href="/get-involved" className="text-sm text-primary hover:underline flex items-center">
                  View all <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </div>
              <div className="space-y-4">
                {dashboardData.recentDonations.map((donation) => (
                  <div key={donation.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{donation.name}</h4>
                      <p className="text-sm text-muted-foreground">{donation.date}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium">{donation.amount}</span>
                      <p className="text-xs text-muted-foreground">Donation</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default DashboardPage;