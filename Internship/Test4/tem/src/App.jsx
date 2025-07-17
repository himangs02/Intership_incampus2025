import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
  return (
    // The main container now allows vertical scrolling for the entire content
    <div className="min-h-screen bg-gray-100 font-sans overflow-y-auto scroll-smooth">
      <TopBar />
      {/* Header with anchor links for smooth scrolling */}
      <Header />
      {/* All "pages" are now sections on a single page */}
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <DoctorsPage />
      <ContactPage />
      <AppointmentPage />
      <Footer />
    </div>
  );
};

// Top Bar Component
const TopBar = () => (
  <div className="bg-teal-500 text-white py-2 px-4 flex justify-between items-center text-sm">
    <div className="flex items-center">
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      Monday - Saturday, 8AM to 10PM
    </div>
    <div className="flex items-center">
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
      Call us now +1 5589 55488 55
    </div>
  </div>
);

// Header Component - Updated to use anchor links
const Header = () => (
  <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50"> {/* Added sticky and z-50 for fixed header */}
    <div className="flex items-center">
      <img src="https://i.pinimg.com/736x/37/c9/f6/37c9f60e27dbf9802fd26246604841c7.jpg" alt="Medicio Logo" className="h-10 w-10 rounded-full mr-2" />
      <span className="text-2xl font-bold text-gray-800">MEDICIO</span>
    </div>
    <div className="flex items-center space-x-6">
      <a href="#home-section" className="text-gray-600 hover:text-teal-500 transition duration-300">HOME</a>
      <a href="#about-section" className="text-gray-600 hover:text-teal-500 transition duration-300">ABOUT</a>
      <a href="#services-section" className="text-gray-600 hover:text-teal-500 transition duration-300">SERVICES</a>
      <a href="#departments-section" className="text-gray-600 hover:text-teal-500 transition duration-300">DEPARTMENTS</a>
      <a href="#doctors-section" className="text-gray-600 hover:text-teal-500 transition duration-300">DOCTORS</a>
      <div className="relative group">
        <button className="text-gray-600 hover:text-teal-500 transition duration-300 flex items-center">
          DROPDOWN
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        {/* Dropdown content can be added here */}
      </div>
      <a href="#contact-section" className="text-gray-600 hover:text-teal-500 transition duration-300">CONTACT</a>
      <a href="#appointment-section" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300">Make an Appointment</a>
    </div>
  </nav>
);

// Footer Component (Simplified for this example)
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 text-center mt-12">
    <p>&copy; 2025 Medicio. All rights reserved.</p>
  </footer>
);

// Home Page Component - Now a section
const HomePage = () => (
  <section id="home-section"> {/* Added ID for scrolling */}
    {/* Hero Section */}
    <div className="relative h-[600px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://tediselmedical.com/wp-content/uploads/2023/07/tecnologia_ergonomia_quirofanos_pic01_20230804_tedisel_medical-1170x656.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-white text-center p-8 bg-white bg-opacity-20 rounded-lg max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Welcome to Medicio</h1>
        <p className="text-lg mb-8 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="#about-section" className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition duration-300">Read More</a>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      </div>
    </div>

    {/* Services Overview Section */}
    <div className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard icon="heart" title="Cardiology" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <ServiceCard icon="pills" title="Pharmacy" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <ServiceCard icon="syringe" title="Vaccination" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <ServiceCard icon="dna" title="Genetics" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </div>
      </div>
    </div>
  </section>
);

// Service Card Component for Home Page
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    {/* Placeholder for icons, ideally use a library like Lucide React or Font Awesome */}
    {icon === 'heart' && <svg className="w-12 h-12 text-teal-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>}
    {icon === 'pills' && <svg className="w-12 h-12 text-teal-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 11.618c.07.79.21 1.56.42 2.306 1.05 3.65 4.22 6.64 7.66 7.318A12.001 12.001 0 0021.08 11.618c-.07-.79-.21-1.56-.42-2.306a12.001 12.001 0 00-2.92-3.29z"></path></svg>}
    {icon === 'syringe' && <svg className="w-12 h-12 text-teal-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16l-4-4m0 0l-4 4m4-4V4"></path></svg>}
    {icon === 'dna' && <svg className="w-12 h-12 text-teal-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 10a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z"></path></svg>}
    <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);


// About Us Page Component - Now a section
const AboutPage = () => (
  <section id="about-section" className="py-16 px-4"> {/* Added ID for scrolling */}
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
      <p className="text-gray-600 mb-12">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img src="https://www.hospertz.com/wp-content/uploads/2024/07/News-Article-Cover-Images-81-1.webp" alt="Building" className="rounded-lg shadow-lg w-full" />
        </div>
        <div className="lg:w-1/2 text-left">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
          <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
            </li>
          </ul>
          {/* Added more content to make the page scrollable */}
          <p className="text-gray-600 mt-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
          <p className="text-gray-600 mt-4">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Services Page Component - Now a section
const ServicesPage = () => (
  <section id="services-section" className="py-16 px-4"> {/* Added ID for scrolling */}
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Services</h2>
      <p className="text-gray-600 mb-12">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceItem icon="heartbeat" title="Nesciunt Mete" description="Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus doloris iure perferendis temporibus et consectetur." />
        <ServiceItem icon="capsules" title="Eosle Commodi" description="Ut autem aut autem non a. Sint et coomodit. Sed animi sint et voluptatem." />
        <ServiceItem icon="hospital" title="Ledo Markt" description="Ut excepturi voluptatem nisi sed. Qui vel ut id voluptas adipisci eos earum corrupti." />
        <ServiceItem icon="dna-alt" title="Asperiores Commodit" description="Non et temporibus minus omnis sed dolor esse consectetur. Cupiditate sed error ea fuga sit provident adipisci." />
        <ServiceItem icon="wheelchair" title="Velit Doloremque" description="Cumque et suscipit saepe. Etit maiores autem enim facilis ut aut ipsam corporis aut. Sed animi sit voluptatem." />
        <ServiceItem icon="plus-circle" title="Dolori Architecto" description="Hic molestiae qui voluptatem et. Fugiat elit soecaeti cupiditat non proident." />
      </div>
    </div>
  </section>
);

// Service Item Component for Services Page
const ServiceItem = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    {/* Placeholder for icons, ideally use a library like Lucide React or Font Awesome */}
    {icon === 'heartbeat' && <svg className="w-16 h-16 text-teal-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>}
    {icon === 'capsules' && <svg className="w-16 h-16 text-teal-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 11.618c.07.79.21 1.56.42 2.306 1.05 3.65 4.22 6.64 7.66 7.318A12.001 12.001 0 0021.08 11.618c-.07-.79-.21-1.56-.42-2.306a12.001 12.001 0 00-2.92-3.29z"></path></svg>}
    {icon === 'hospital' && <svg className="w-16 h-16 text-teal-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-5v4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5"></path></svg>}
    {icon === 'dna-alt' && <svg className="w-16 h-16 text-teal-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 10a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z"></path></svg>}
    {icon === 'wheelchair' && <svg className="w-16 h-16 text-teal-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>}
    {icon === 'plus-circle' && <svg className="w-16 h-16 text-teal-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
    <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

// Doctors Page Component - Now a section
const DoctorsPage = () => (
  <section id="doctors-section" className="py-16 px-4"> {/* Added ID for scrolling */}
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Doctors</h2>
      <p className="text-gray-600 mb-12">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <DoctorCard name="Walter White" title="Chief Medical Office" image="https://www.jamsadr.com/images/neutrals/person-donald-900x1080.jpg" />
        <DoctorCard name="Sarah Jhonshon" title="Anesthesiologist" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&s" />
        <DoctorCard name="William Anderson" title="Cardiology" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5iB1zY-OM0aoh3RIhLR_j94LlzNEBtXynTA&s" />
        <DoctorCard name="Amanda Jepson" title="Neurosurgeon" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL89JpsflIH8zoQXLuPruQu4It8onem-Z0zA&s" />
      </div>
    </div>
  </section>
);

// Doctor Card Component
const DoctorCard = ({ name, title, image }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
    <img src={image} alt={name} className="w-full h-auto rounded-md mb-4 object-cover" />
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-500 text-sm">{title}</p>
  </div>
);

// Contact Page Component - Now a section
const ContactPage = () => (
  <section id="contact-section" className="py-16 px-4"> {/* Added ID for scrolling */}
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
      <p className="text-gray-600 mb-12">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

      <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
        <div className="lg:w-1/3 mb-8 lg:mb-0 text-left">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Downtown, Conference Center</h3>
          <p className="text-gray-600 mb-2">157 W 57th St, NY, NY 10019</p>
          <p className="text-gray-600 mb-4">4.3 <span className="text-yellow-500">★★★★☆</span> (83 reviews)</p>
          <a href="#" className="text-teal-500 hover:underline">View large map</a>
        </div>
        <div className="lg:w-2/3">
          {/* Placeholder for Google Map - in a real app, you'd embed a map */}
          <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.987502612264!2d-73.98184928459285!3d40.76581594215865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fda7eaeb27%3A0x53e47f94dfae2f88!2s157%20W%2057th%20St%2C%20New%20York%2C%20NY%2010019%2C%20USA!5e0!3m2!1sen!2sin!4v1689456247890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

        </div>
      </div>
    </div>
  </section>
);

// Make an Appointment Page Component - Now a section
const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    doctor: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Appointment Form Submitted:', formData);
    // Replaced alert with a simple console log for demonstration
    console.log('Appointment request submitted! (Check console for data)');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      department: '',
      doctor: '',
      message: '',
    });
  };

  return (
    <section id="appointment-section" className="py-16 px-4"> {/* Added ID for scrolling */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">MAKE AN APPOINTMENT</h2>
        <p className="text-gray-600 mb-12">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <input
              type="date"
              name="date"
              placeholder="mm/dd/yyyy"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <select
              name="department"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Oncology">Oncology</option>
            </select>
            <select
              name="doctor"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              <option value="">Select Doctor</option>
              <option value="Walter White">Walter White</option>
              <option value="Sarah Jhonshon">Sarah Jhonshon</option>
              <option value="William Anderson">William Anderson</option>
              <option value="Amanda Jepson">Amanda Jepson</option>
            </select>
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Message (Optional)"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition duration-300"
          >
            Make an Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default App;
