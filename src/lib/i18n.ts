export type Locale = 'en' | 'es';

export const translations = {
  en: {
    metaDescription: 'Discover beauty at every step of your life with us',
    siteTitle: 'Jolimia Beauty Academy',
    nav: {
      programs: 'Programs',
      admissions: 'Admissions',
      aboutUs: 'About Us',
      contact: 'Contact',
      language: 'Language',
    },
    hero: {
      cosmetologia: {
        title: 'Cosmetology',
        description: 'Comprehensive program approved by DPOR leading to a Cosmetology license in Virginia',
        duration: '1,000 hours',
      },
      tecnicoUnas: {
        title: 'Nail Technician',
        description: 'Specialize in manicure, pedicure, and nail art with a professional license',
        duration: '150 hours',
      },
      tecnicoDepilacion: {
        title: 'Waxing Technician',
        description: 'Learn professional facial and body waxing with safety protocols',
        duration: '115 hours',
      },
      register: 'Register',
      previousSlide: 'Previous slide',
      nextSlide: 'Next slide',
      goToSlide: (n: number) => `Go to slide ${n}`,
      programImage: (title: string) => `Program image: ${title}`,
    },
    intro: {
      title: 'Benefits of Our Programs',
      subtitle: 'Discover why thousands of students choose Jolimia Beauty Academy for their professional future',
      cards: {
        certification: {
          title: 'State License in Virginia',
          description: 'Our DPOR-approved programs lead to a professional license valid in Virginia, opening real opportunities in the industry.',
        },
        instructors: {
          title: 'Licensed Instructors',
          description: 'Training delivered by licensed professionals with real salon and spa experience.',
        },
        flexible: {
          title: 'In-Person Practical Education',
          description: '100% in-person, supervised, hands-on classes using real professional tools.',
        },
        environment: {
          title: 'Professional and Safe Environment',
          description: 'A modern space where you learn discipline, professional ethics, and customer service from day one.',
        },
      },
    },
    accreditation: {
      title: 'Approved Programs',
      description: 'Our programs are approved by the DPOR-VIRGINIA state authority. These programs meet the most rigorous state requirements and lead to a professional license in Virginia.',
      items: {
        recognition: {
          title: 'State recognition',
          description: 'Licenses valid throughout Virginia.',
        },
        standards: {
          title: 'Rigorous standards',
          description: 'We comply with all rules and regulations.',
        },
        preparation: {
          title: 'Guaranteed preparation',
          description: 'Courses designed to pass the state exam.',
        },
      },
      dporTitle: 'DPOR-VIRGINIA',
      dporSubtitle: 'Department of Professional and Occupational Regulation',
      certificationLabel: 'Certification',
      certificationId: '#2024-VA-COSMETOLOGY',
      register: 'Register',
    },
    about: {
      imageAlt: 'Official Jolimia Academy team photo',
      title: 'Who We Are',
      mission: 'Our Mission',
      missionText: 'Empower students with technical, practical, and professional training in the beauty industry, preparing them to practice with confidence, responsibility, and success.',
      vision: 'Our Vision',
      visionText: 'To be a recognized academy in Virginia for educational excellence, professional ethics, and real results.',
      values: 'Our Values',
      valuesList: ['Quality', 'Discipline', 'Hygiene', 'Respect', 'Growth', 'Professionalism'],
      quoteHighlight: 'At Jolimia',
      quoteRest: ' you don’t just learn technique. You learn discipline, ethics, customer service, and a professional mindset.',
    },
    collabs: {
      title: 'Our Partners',
      subtitle: 'We work with the best salons and companies in the industry',
      logoAlt: (name: string) => `${name} logo`,
    },
    programs: {
      title: 'DPOR-Approved Programs',
      subtitle: 'Professional training leading to a license in Virginia',
      cosmetologia: {
        title: 'Cosmetology Program',
        description: 'Master cutting, coloring, styling, and hair treatments. Learn chemical services, skin basics, hygiene, and professional safety.',
        duration: '1,000 hours',
        license: 'Cosmetology License - Virginia',
        includes: ['Cutting and coloring', 'Professional styling', 'Chemical services', 'State exam'],
      },
      tecnicoUnas: {
        title: 'Nail Technician Program',
        description: 'Specialize in manicure, pedicure, gel, and acrylic systems. Learn nail art and infection control protocols.',
        duration: '150 hours',
        license: 'Nail Technician License - Virginia',
        includes: ['Professional manicure', 'Pedicure', 'Gel and acrylic', 'State exam'],
      },
      tecnicoDepilacion: {
        title: 'Waxing Technician Program',
        description: 'Learn facial and body waxing with safety protocols. Master skin preparation and post-wax care.',
        duration: '115 hours',
        license: 'Waxing Technician License - Virginia',
        includes: ['Facial waxing', 'Body waxing', 'Hygiene protocols', 'State exam'],
      },
      includes: 'Includes',
      register: 'Register',
      importantInfo: 'Important information',
      notes: {
        education: {
          title: '100% in-person education',
          description: 'All classes are held at our facilities with constant supervision.',
        },
        limited: {
          title: 'Limited spots',
          description: 'Small groups to ensure personalized attention and high-quality learning.',
        },
        preparation: {
          title: 'Guaranteed preparation',
          description: 'Courses designed to successfully prepare you for the state exam.',
        },
        instructors: {
          title: 'Licensed instructors',
          description: 'Learn from professionals with real salon and spa experience.',
        },
      },
    },
    certifications: {
      title: 'Professional Certifications',
      subtitle: 'Specialize your profile with private certifications designed to expand your services',
      items: {
        extensions: {
          title: 'Eyelash Extensions - Classic Technique',
          description: 'One-to-one application focused on technique, safety, and hygiene. Ideal for beginners who want to specialize.',
          level: 'Beginner',
        },
        advanced: {
          title: 'Advanced Extensions - Volume and Hybrid',
          description: 'Master Russian volume and hybrid, advanced mapping, and perfected design. Requires experience or prior certification.',
          level: 'Advanced',
        },
        lifting: {
          title: 'Lash Lifting and Brow Lamination',
          description: 'Professional lash lifting, brow lamination, and brow design with protocols and product selection.',
          level: 'Specialization',
        },
        makeup: {
          title: 'Professional Makeup Artist',
          description: 'Day, night, social, and professional makeup for events, photography, and social media with skin correction.',
          level: 'Specialization',
        },
      },
      learnMore: 'Learn more',
      importantNote: 'Important note',
      importantNoteText: 'Professional certifications do not grant a state license. They are designed for specialization and professional development. DPOR-approved programs (Cosmetology, Nail Technician, and Waxing Technician) do lead to a license in Virginia.',
    },
    admissions: {
      title: 'Admissions',
      subtitle: 'The first step toward your professional career in beauty',
      requirementsTitle: 'General Requirements',
      requirements: [
        'High School diploma or equivalent (for DPOR programs)',
        'Complete enrollment application',
        'Interview with the academic team',
        'Legal adult age',
        'Valid proof of identity',
      ],
      importantNote: 'Important note:',
      internationalNote: 'International students require a valid visa and additional documentation.',
      processTitle: 'Enrollment Process',
      steps: {
        application: { title: 'Application', description: 'Complete the application form online or in person.' },
        interview: { title: 'Interview', description: 'Attend an interview with our admissions team.' },
        documentation: { title: 'Documentation', description: 'Submit required documents (ID, diploma, etc.).' },
        confirmation: { title: 'Confirmation', description: 'Receive your acceptance letter and start your program.' },
      },
      readyTitle: 'Ready to get started?',
      readySubtitle: 'Start your application today and join the Jolimia Beauty Academy community',
      applyButton: 'Apply for Admission',
    },
    footer: {
      tagline: 'Transforming lives through excellence in professional beauty education.',
      rights: '© 2024 Jolimia Beauty Academy. All rights reserved.',
    },
  },
  es: {
    metaDescription: 'Descubre la belleza en cada paso de tu vida con nosotros',
    siteTitle: 'Jolimia Beauty Academy',
    nav: {
      programs: 'Programas',
      admissions: 'Admisiones',
      aboutUs: 'Acerca de',
      contact: 'Contacto',
      language: 'Idioma',
    },
    hero: {
      cosmetologia: {
        title: 'Cosmetología',
        description: 'Programa completo avalado por DPOR que conduce a licencia de Cosmetología en Virginia',
        duration: '1,000 horas',
      },
      tecnicoUnas: {
        title: 'Técnico en Uñas',
        description: 'Especialízate en manicure, pedicure y nail art con licencia profesional',
        duration: '150 horas',
      },
      tecnicoDepilacion: {
        title: 'Técnico en Depilación',
        description: 'Aprende depilación profesional facial y corporal con protocolos de seguridad',
        duration: '115 horas',
      },
      register: 'Registrarse',
      previousSlide: 'Slide anterior',
      nextSlide: 'Slide siguiente',
      goToSlide: (n: number) => `Ir al slide ${n}`,
      programImage: (title: string) => `Imagen del programa ${title}`,
    },
    intro: {
      title: 'Beneficios de Nuestros Programas',
      subtitle: 'Descubre por qué miles de estudiantes eligen Jolimia Beauty Academy para su futuro profesional',
      cards: {
        certification: {
          title: 'Licencia Estatal en Virginia',
          description: 'Nuestros programas avalados por DPOR conducen a licencia profesional válida en Virginia, abriendo oportunidades reales en la industria.',
        },
        instructors: {
          title: 'Instructores Licenciados',
          description: 'Formación impartida por profesionales licenciados con experiencia real en salón y spa.',
        },
        flexible: {
          title: 'Educación Presencial y Práctica',
          description: 'Clases 100% presenciales, supervisadas y prácticas con herramientas profesionales reales.',
        },
        environment: {
          title: 'Ambiente Profesional y Seguro',
          description: 'Espacio moderno donde aprendes disciplina, ética profesional y servicio al cliente desde el inicio.',
        },
      },
    },
    accreditation: {
      title: 'Programas Avalados',
      description: 'Nuestros programas están avalados por el estado DPOR-VIRGINIA. Estos programas cumplen los requisitos estatales más rigurosos y conducen a una licencia profesional en Virginia.',
      items: {
        recognition: {
          title: 'Reconocimiento estatal',
          description: 'Licencias válidas en todo Virginia.'
        },
        standards: {
          title: 'Estándares rigurosos',
          description: 'Cumplimos con todas las normas y regulaciones.'
        },
        preparation: {
          title: 'Preparación garantizada', description: 'Cursos diseñados para pasar el examen estatal.'
        },
      },
      dporTitle: 'DPOR-VIRGINIA',
      dporSubtitle: 'Departamento de Ocupaciones Profesionales y Regulación',
      certificationLabel: 'Certificación',
      certificationId: '#2024-VA-COSMETOLOGY',
      register: 'Regístrate',
    },
    about: {
      imageAlt: 'Fotografía del equipo oficial de Jolimia Academy',
      title: '¿Quiénes somos?',
      mission: 'Nuestra misión',
      missionText: 'Empoderar a estudiantes con formación técnica, práctica y profesional en la industria de la belleza, preparándolos para ejercer con confianza, responsabilidad y éxito.',
      vision: 'Nuestra visión',
      visionText: 'Ser una academia reconocida en Virginia por su excelencia educativa, ética profesional y resultados reales.',
      values: 'Nuestros valores',
      valuesList: ['Calidad', 'Disciplina', 'Higiene', 'Respeto', 'Crecimiento', 'Profesionalismo'],
      quoteHighlight: 'En Jolimia',
      quoteRest: ' no solo aprendes técnica. Aprendes disciplina, ética, servicio al cliente y mentalidad profesional.',
    },
    collabs: {
      title: 'Nuestros Colaboradores',
      subtitle: 'Trabajamos con los mejores salones y empresas de la industria',
      logoAlt: (name: string) => `Logotipo de ${name}`,
    },
    programs: {
      title: 'Programas Avalados por DPOR',
      subtitle: 'Formación profesional que conduce a licencia en Virginia',
      cosmetologia: {
        title: 'Programa de Cosmetología',
        description: 'Domina corte, color, estilizado y tratamientos capilares. Aprende servicios químicos, bases de piel, higiene y seguridad profesional.',
        duration: '1,000 horas',
        license: 'Licencia de Cosmetología - Virginia',
        includes: ['Corte y color', 'Estilizado profesional', 'Servicios químicos', 'Examen estatal'],
      },
      tecnicoUnas: {
        title: 'Técnico en Uñas',
        description: 'Especialízate en manicure, pedicure, sistemas de gel y acrílico. Aprende nail art y protocolos de control de infecciones.',
        duration: '150 horas',
        license: 'Licencia de Técnico en Uñas - Virginia',
        includes: ['Manicure profesional', 'Pedicure', 'Gel y acrílico', 'Examen estatal'],
      },
      tecnicoDepilacion: {
        title: 'Técnico en Depilación',
        description: 'Aprende depilación facial y corporal con protocolos de seguridad. Domina preparación de piel y cuidados post-depilación.',
        duration: '115 horas',
        license: 'Licencia de Técnico en Depilación - Virginia',
        includes: ['Depilación facial', 'Depilación corporal', 'Protocolos de higiene', 'Examen estatal'],
      },
      includes: 'Incluye',
      register: 'Registrarse',
      importantInfo: 'Información importante',
      notes: {
        education: {
          title: 'Educación 100% presencial',
          description: 'Todas las clases son en nuestras instalaciones con supervisión constante.',
        },
        limited: {
          title: 'Cupos limitados',
          description: 'Grupos pequeños para garantizar atención personalizada y aprendizaje de calidad.',
        },
        preparation: {
          title: 'Preparación garantizada',
          description: 'Cursos diseñados para prepararte exitosamente para el examen estatal.',
        },
        instructors: {
          title: 'Instructores licenciados',
          description: 'Aprende de profesionales con experiencia real en salón y spa.',
        },
      },
    },
    certifications: {
      title: 'Certificaciones Profesionales',
      subtitle: 'Especializa tu perfil con certificaciones privadas diseñadas para ampliar servicios',
      items: {
        extensions: {
          title: 'Extensiones de Pestañas - Técnica Clásica',
          description: 'Aplicación pelo a pelo con enfoque en técnica, seguridad e higiene. Ideal para principiantes que desean especializarse.',
          level: 'Principiante',
        },
        advanced: {
          title: 'Extensiones Avanzada - Volumen e Híbrida',
          description: 'Domina volumen ruso e híbrido, mapeo avanzado y diseño perfeccionado. Requiere experiencia o certificación previa.',
          level: 'Avanzado',
        },
        lifting: {
          title: 'Lifting de Pestañas y Laminado de Cejas',
          description: 'Elevación profesional de pestañas, laminado y diseño de cejas con protocolos y selección de productos.',
          level: 'Especialización',
        },
        makeup: {
          title: 'Profesional en Maquillaje',
          description: 'Maquillaje de día, noche, social y profesional. Para eventos, fotografía y redes sociales con corrección de piel.',
          level: 'Especialización',
        },
      },
      learnMore: 'Conocer más',
      importantNote: 'Nota importante',
      importantNoteText: 'Las certificaciones profesionales no otorgan licencia estatal. Están diseñadas para especialización y actualización profesional. Los programas avalados por DPOR (Cosmetología, Técnico en Uñas y Técnico en Depilación) sí conducen a licencia en Virginia.',
    },
    admissions: {
      title: 'Admisiones',
      subtitle: 'El primer paso hacia tu carrera profesional en belleza',
      requirementsTitle: 'Requisitos Generales',
      requirements: [
        'Diploma de High School o equivalente (para programas DPOR)',
        'Completar aplicación de inscripción',
        'Entrevista con el equipo académico',
        'Mayor de edad',
        'Prueba de identidad válida',
      ],
      importantNote: 'Nota importante:',
      internationalNote: 'Para estudiantes internacionales se requiere visa válida y documentación adicional.',
      processTitle: 'Proceso de Inscripción',
      steps: {
        application: { title: 'Solicitud', description: 'Completa el formulario de solicitud en línea o presencialmente.' },
        interview: { title: 'Entrevista', description: 'Realiza una entrevista con nuestro equipo de admisiones.' },
        documentation: { title: 'Documentación', description: 'Envía los documentos requeridos (ID, diploma, etc).' },
        confirmation: { title: 'Confirmación', description: 'Recibe tu carta de aceptación y comienza tu programa.' },
      },
      readyTitle: '¿Listo para comenzar?',
      readySubtitle: 'Inicia tu solicitud hoy y sé parte de la comunidad Jolimia Beauty Academy',
      applyButton: 'Solicitar Admisión',
    },
    footer: {
      tagline: 'Transformando vidas a través de la excelencia en educación de belleza profesional.',
      rights: '© 2024 Jolimia Beauty Academy. Todos los derechos reservados.',
    },
  },
} as const;
