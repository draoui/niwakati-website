"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Heart, Handshake, ArrowRight, DollarSign, Building } from "lucide-react";

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

const GetInvolvedPage = () => {
  // Hero section animations
  const heroControls = useAnimation();
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Volunteer section animations
  const volunteerControls = useAnimation();
  const [volunteerRef, volunteerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Donate section animations
  const donateControls = useAnimation();
  const [donateRef, donateInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Partner section animations
  const partnerControls = useAnimation();
  const [partnerRef, partnerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (volunteerInView) volunteerControls.start("visible");
    if (donateInView) donateControls.start("visible");
    if (partnerInView) partnerControls.start("visible");
  }, [
    heroInView, heroControls,
    volunteerInView, volunteerControls,
    donateInView, donateControls,
    partnerInView, partnerControls
  ]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        variants={fadeInUp}
        className="relative py-24 bg-primary/10"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get <span className="text-primary">Involved</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl max-w-3xl mx-auto mb-8 text-muted-foreground"
          >
            There are many ways to support our mission and make a positive impact in our community. Explore the opportunities below to find the best fit for you.
          </motion.p>
        </div>
      </motion.section>

      {/* Volunteer Section */}
      <motion.section
        ref={volunteerRef}
        initial="hidden"
        animate={volunteerControls}
        variants={staggerContainer}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Users size={24} className="text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Volunteer With Us</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Volunteers are the heart of our organization. By sharing your time, skills, and passion, you can make a meaningful difference in our community. We offer a variety of volunteer opportunities to match different interests, skills, and availability.
              </p>
              <h3 className="text-xl font-bold mb-4">Volunteer Opportunities:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Event Support</h4>
                    <p className="text-muted-foreground">Help organize and run our events, from cultural festivals to workshops and community gatherings.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Program Facilitation</h4>
                    <p className="text-muted-foreground">Lead or assist with our programs, such as language classes, youth workshops, or cultural exchange activities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Administrative Support</h4>
                    <p className="text-muted-foreground">Assist with office tasks, communications, data management, and other behind-the-scenes work.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Specialized Skills</h4>
                    <p className="text-muted-foreground">Contribute your professional skills in areas such as graphic design, translation, legal advice, or IT support.</p>
                  </div>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Become a Volunteer <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://thumbs.dreamstime.com/z/team-young-diversity-volunteer-worker-group-enjoy-charitable-social-work-outdoor-tree-forest-planting-ngo-fighting-273224918.jpg"
                  alt="Volunteers at Ni Wakati"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Donate Section */}
      <motion.section
        ref={donateRef}
        initial="hidden"
        animate={donateControls}
        variants={staggerContainer}
        className="py-20 bg-muted"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="relative order-2 lg:order-1">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://www.gofundme.com/c/wp-content/uploads/2018/07/iStock-873780612-scaled-1.jpg?w=1920"
                  alt="Impact of donations"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg -z-10"></div>
            </motion.div>
            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <DollarSign size={24} className="text-secondary" />
                </div>
                <h2 className="text-3xl font-bold">Support Our Work</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Your financial support enables us to continue and expand our programs promoting diversity and inclusion. Every contribution, regardless of size, makes a difference in our ability to serve our community.
              </p>
              <h3 className="text-xl font-bold mb-4">How Your Donation Helps:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-secondary font-bold text-sm">€</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground">€25 provides materials for a cultural workshop for 10 participants</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-secondary font-bold text-sm">€</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground">€50 supports a language class for newcomers for one week</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-secondary font-bold text-sm">€</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground">€100 funds a youth leadership training session</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-secondary font-bold text-sm">€</span>
                  </div>
                  <div>
                    <p className="text-muted-foreground">€500 helps organize a community integration event</p>
                  </div>
                </li>
              </ul>
              <div className="space-y-4">
                <Link href="/contact" className="btn-secondary inline-flex items-center">
                  Make a Donation <Heart size={18} className="ml-2" />
                </Link>
                <p className="text-sm text-muted-foreground mt-4">
                  Ni Wakati ASBL is a registered non-profit organization. All donations are tax-deductible to the extent allowed by law.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Partner Section */}
      <motion.section
        ref={partnerRef}
        initial="hidden"
        animate={partnerControls}
        variants={staggerContainer}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Building size={24} className="text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Partner With Us</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Partnerships are essential to our work. By collaborating with businesses, schools, community organizations, and government agencies, we can create more inclusive communities and reach more people with our programs.
              </p>
              <h3 className="text-xl font-bold mb-4">Partnership Opportunities:</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Handshake size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Corporate Partnerships</h4>
                    <p className="text-muted-foreground">Collaborate with us on diversity and inclusion initiatives, employee engagement opportunities, or corporate social responsibility programs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Handshake size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Educational Partnerships</h4>
                    <p className="text-muted-foreground">Work with us to bring diversity education programs to schools, universities, or other educational institutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Handshake size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Community Partnerships</h4>
                    <p className="text-muted-foreground">Join forces with us on community projects, events, or initiatives that promote diversity and inclusion.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Handshake size={14} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">In-Kind Support</h4>
                    <p className="text-muted-foreground">Provide goods, services, or expertise that can help us fulfill our mission and serve our community.</p>
                  </div>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Become a Partner <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://thumbs.dreamstime.com/b/handshake-business-people-diversity-partnership-collaboration-b-welcome-thank-you-meeting-success-shaking-hands-job-270134893.jpg"
                  alt="Partnership with Ni Wakati"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default GetInvolvedPage;