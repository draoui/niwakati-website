"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Clock, ArrowRight, Filter } from "lucide-react";

// Sample data for events
const allEvents = [
  {
    id: "1",
    title: "Diversity in Action Workshop",
    description: "A workshop focused on practical strategies for promoting diversity and inclusion in various settings. Participants will learn about unconscious bias, inclusive communication, and creating welcoming environments.",
    date: "June 15, 2023",
    time: "14:00 - 17:00",
    location: "Brussels Community Center",
    imageUrl: "https://i.pinimg.com/originals/f3/ca/be/f3cabed2f26b9cca3996613f593fa9a1.jpg",
    isPast: false
  },
  {
    id: "2",
    title: "Cultural Festival",
    description: "A celebration of cultural diversity featuring music, dance, food, and art from around the world. Join us for a day of cultural exchange and community building.",
    date: "July 8-10, 2023",
    time: "10:00 - 22:00",
    location: "City Park, Brussels",
    imageUrl: "https://i.pinimg.com/originals/d3/42/37/d34237920b5dbbebb33548a13a57aae1.jpg",
    isPast: false
  },
  {
    id: "3",
    title: "Youth Leadership Conference",
    description: "A conference designed to empower young people from diverse backgrounds to become leaders in their communities. The event will feature inspiring speakers, interactive workshops, and networking opportunities.",
    date: "August 20, 2023",
    time: "09:00 - 17:00",
    location: "International Youth Center, Brussels",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/585185bf2994ca849cc0b79e/1661359833094-FB3S3SWJS1KIU4ZMJ910/YLC.jpg",
    isPast: false
  },
  {
    id: "4",
    title: "Community Integration Fair",
    description: "An event connecting newcomers with local resources, services, and community organizations. The fair will include information booths, workshops, and opportunities to meet community members.",
    date: "September 5, 2023",
    time: "11:00 - 16:00",
    location: "Municipal Hall, Brussels",
    imageUrl: "https://as1.ftcdn.net/v2/jpg/09/27/69/14/1000_F_927691478_deXHaKBQWiBuGTIxyKMBhN9N2sllMEf5.jpg",
    isPast: false
  },
  {
    id: "5",
    title: "Intercultural Dialogue Forum",
    description: "A forum for open and respectful conversation about cultural differences, shared values, and common challenges. The event will feature a panel discussion followed by small group dialogues.",
    date: "February 12, 2023",
    time: "18:30 - 21:00",
    location: "University Conference Center, Brussels",
    imageUrl: "https://ourauckland.aucklandcouncil.govt.nz/media/nwmfwngh/img_20210511_attendees-dialouge-_-diversity-forum-may-2021.jpg?anchor=center&mode=crop&width=1360&rnd=132683115793270000",
    isPast: true
  },
  {
    id: "6",
    title: "Diversity in the Workplace Seminar",
    description: "A seminar for employers and HR professionals on creating inclusive workplaces. Topics will include recruitment strategies, workplace policies, and fostering an inclusive organizational culture.",
    date: "March 25, 2023",
    time: "09:00 - 13:00",
    location: "Business Innovation Center, Brussels",
    imageUrl: "https://img.freepik.com/premium-photo/group-seminar-meeting-office-diversity-multicultural-team-building-training-businesspeople-event-company-professional-workplace-conference-workshop-as-audience_590464-329481.jpg",
    isPast: true
  },
  {
    id: "7",
    title: "Community Volunteer Day",
    description: "A day of service bringing together volunteers from diverse backgrounds to work on community improvement projects. Projects will include park clean-up, mural painting, and community garden planting.",
    date: "April 22, 2023",
    time: "10:00 - 15:00",
    location: "Various locations in Brussels",
    imageUrl: "https://i.pinimg.com/736x/ca/ea/1d/caea1d562797dee2e08cc1a08641a51f.jpg",
    isPast: true
  },
  {
    id: "8",
    title: "Cultural Awareness Training",
    description: "A training session for educators on incorporating cultural awareness into their teaching practices. The training will include strategies for creating inclusive classrooms and addressing cultural differences.",
    date: "May 10, 2023",
    time: "14:00 - 17:00",
    location: "Teacher Training Center, Brussels",
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOiRARnJ0tzMm39DfeA9yc28Kbica1UUU5KPzjHAzU3ssKE9TBuy2G_Sq94iqD9vw3GZwHT1gPZFD9GGRbiAlg1dF5JilmaDE5iVSQTvKg-CXH7ioGi9MubEOA43YGRAuZtlF7hDJzOnAWiZwDA_ja45qEP6F60xXO0m1DXaBCju9GWapFhH1adqex/s1200/1200px-Academic-culture.jpg",
    isPast: true
  }
];

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

const EventsPage = () => {
  const [filter, setFilter] = useState("upcoming"); // "upcoming" or "past"
  const [events, setEvents] = useState(allEvents.filter(event => !event.isPast));

  // Hero section animations
  const heroControls = useAnimation();
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Events section animations
  const eventsControls = useAnimation();
  const [eventsRef, eventsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (eventsInView) eventsControls.start("visible");
  }, [
    heroInView, heroControls,
    eventsInView, eventsControls
  ]);

  useEffect(() => {
    if (filter === "upcoming") {
      setEvents(allEvents.filter(event => !event.isPast));
    } else {
      setEvents(allEvents.filter(event => event.isPast));
    }
  }, [filter]);

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
            Our <span className="text-primary">Events</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl max-w-3xl mx-auto mb-8 text-muted-foreground"
          >
            Join us at our upcoming events or learn about our past events to see the impact we're making in our community.
          </motion.p>
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section
        ref={eventsRef}
        initial="hidden"
        animate={eventsControls}
        variants={staggerContainer}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setFilter("upcoming")}
                className={`px-6 py-3 text-sm font-medium rounded-l-md ${
                  filter === "upcoming"
                    ? "bg-primary text-white"
                    : "bg-card hover:bg-muted"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setFilter("past")}
                className={`px-6 py-3 text-sm font-medium rounded-r-md ${
                  filter === "past"
                    ? "bg-primary text-white"
                    : "bg-card hover:bg-muted"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {events.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No events to display.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  id={event.id}
                  variants={fadeInUp}
                  className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all card-hover"
                >
                  <div className="relative h-64">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-6">{event.description}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center">
                        <Calendar size={18} className="text-primary mr-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={18} className="text-primary mr-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={18} className="text-primary mr-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    {!event.isPast && (
                      <Link 
                        href={`/events/${event.id}`}
                        className="btn-primary inline-flex items-center"
                      >
                        Register Now <ArrowRight size={18} className="ml-2" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default EventsPage;