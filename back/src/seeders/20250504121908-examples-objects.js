'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Companies
    await queryInterface.bulkInsert('Companies', [
      {
        id: '11111111-1111-4a11-a111-111111111111',
        name: 'TechNova Solutions',
        description: 'A leading technology solutions provider specializing in enterprise software development and cloud infrastructure.',
        address: '123 Innovation Drive, San Francisco, CA 94103',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '22222222-2222-4a22-a222-222222222222',
        name: 'Global Finance Partners',
        description: 'International financial services firm offering investment banking, wealth management, and consulting services.',
        address: '456 Wall Street, New York, NY 10005',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '33333333-3333-4a33-a333-333333333333',
        name: 'HealthPlus Medical Systems',
        description: 'Healthcare technology company developing advanced medical software and patient management solutions.',
        address: '789 Wellness Blvd, Boston, MA 02115',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    // Departments
    await queryInterface.bulkInsert('Departments', [
      {
        id: '44444444-4444-4a44-a444-444444444444',
        name: 'Engineering',
        description: 'Software engineering and development team',
        company_id: '11111111-1111-4a11-a111-111111111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '55555555-5555-4a55-a555-555555555555',
        name: 'Product Management',
        description: 'Product strategy and management department',
        company_id: '11111111-1111-4a11-a111-111111111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '66666666-6666-4a66-a666-666666666666',
        name: 'Human Resources',
        description: 'Personnel management and company culture development',
        company_id: '11111111-1111-4a11-a111-111111111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '77777777-7777-4a77-a777-777777777777',
        name: 'Finance',
        description: 'Financial operations and reporting',
        company_id: '22222222-2222-4a22-a222-222222222222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '88888888-8888-4a88-a888-888888888888',
        name: 'Investment Banking',
        description: 'Corporate finance and advisory services',
        company_id: '22222222-2222-4a22-a222-222222222222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '99999999-9999-4a99-a999-999999999999',
        name: 'Research & Development',
        description: 'Medical research and technology innovation',
        company_id: '33333333-3333-4a33-a333-333333333333',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    // Positions
    await queryInterface.bulkInsert('Positions', [
      {
        id: 'aaaaaaaa-aaaa-4aaa-aaaa-aaaaaaaaaaaa',
        name: 'Software Engineer',
        description: 'Develops and maintains software applications and systems',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'bbbbbbbb-bbbb-4bbb-bbbb-bbbbbbbbbbbb',
        name: 'Product Manager',
        description: 'Manages product lifecycle and development processes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'cccccccc-cccc-4ccc-cccc-cccccccccccc',
        name: 'HR Specialist',
        description: 'Handles employee relations and recruitment processes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'dddddddd-dddd-4ddd-dddd-dddddddddddd',
        name: 'Financial Analyst',
        description: 'Analyzes financial data and prepares reports',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'eeeeeeee-eeee-4eee-eeee-eeeeeeeeeeee',
        name: 'Investment Banker',
        description: 'Provides financial advisory services to clients',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'ffffffff-ffff-4fff-ffff-ffffffffffff',
        name: 'Medical Researcher',
        description: 'Conducts research on medical technology and solutions',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'gggggggg-gggg-4ggg-gggg-gggggggggggg',
        name: 'Department Manager',
        description: 'Oversees department operations and staff',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'hhhhhhhh-hhhh-4hhh-hhhh-hhhhhhhhhhhh',
        name: 'CTO',
        description: 'Chief Technology Officer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'iiiiiiii-iiii-4iii-iiii-iiiiiiiiiiii',
        name: 'CEO',
        description: 'Chief Executive Officer',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    // Users
    await queryInterface.bulkInsert('Users', [
      {
        id: 'jjjjjjjj-jjjj-4jjj-jjjj-jjjjjjjjjjjj',
        first_name: 'John',
        corporate_login: 'john.doe',
        last_name: 'Doe',
        middle_name: 'Robert',
        email: 'john.doe@technova.com',
        password: '$2a$10$hACwQ5/HQI6FhbIISOUVeusy3sKyUDhSq36fF5d/54aAdiygJPFzm', // admin password
        phone_number: '555-123-4567',
        birthday: new Date('1985-06-15'),
        role: 'admin',
        position_id: 'hhhhhhhh-hhhh-4hhh-hhhh-hhhhhhhhhhhh',
        department_id: '44444444-4444-4a44-a444-444444444444',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'kkkkkkkk-kkkk-4kkk-kkkk-kkkkkkkkkkkk',
        first_name: 'Jane',
        corporate_login: 'jane.smith',
        last_name: 'Smith',
        middle_name: 'Elizabeth',
        email: 'jane.smith@technova.com',
        password: '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', // userpass
        phone_number: '555-234-5678',
        birthday: new Date('1990-03-22'),
        role: 'user',
        position_id: 'aaaaaaaa-aaaa-4aaa-aaaa-aaaaaaaaaaaa',
        department_id: '44444444-4444-4a44-a444-444444444444',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'llllllll-llll-4lll-llll-llllllllllll',
        first_name: 'Michael',
        corporate_login: 'michael.johnson',
        last_name: 'Johnson',
        middle_name: 'Thomas',
        email: 'michael.johnson@technova.com',
        password: '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', // userpass
        phone_number: '555-345-6789',
        birthday: new Date('1988-09-10'),
        role: 'user',
        position_id: 'bbbbbbbb-bbbb-4bbb-bbbb-bbbbbbbbbbbb',
        department_id: '55555555-5555-4a55-a555-555555555555',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'mmmmmmmm-mmmm-4mmm-mmmm-mmmmmmmmmmmm',
        first_name: 'Emily',
        corporate_login: 'emily.williams',
        last_name: 'Williams',
        middle_name: 'Rose',
        email: 'emily.williams@technova.com',
        password: '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', // userpass
        phone_number: '555-456-7890',
        birthday: new Date('1992-12-05'),
        role: 'user',
        position_id: 'cccccccc-cccc-4ccc-cccc-cccccccccccc',
        department_id: '66666666-6666-4a66-a666-666666666666',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'nnnnnnnn-nnnn-4nnn-nnnn-nnnnnnnnnnnn',
        first_name: 'David',
        corporate_login: 'david.brown',
        last_name: 'Brown',
        middle_name: 'James',
        email: 'david.brown@globalfinance.com',
        password: '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', // userpass
        phone_number: '555-567-8901',
        birthday: new Date('1980-04-18'),
        role: 'admin',
        position_id: 'iiiiiiii-iiii-4iii-iiii-iiiiiiiiiiii',
        department_id: '77777777-7777-4a77-a777-777777777777',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'oooooooo-oooo-4ooo-oooo-oooooooooooo',
        first_name: 'Sarah',
        corporate_login: 'sarah.miller',
        last_name: 'Miller',
        middle_name: 'Jean',
        email: 'sarah.miller@globalfinance.com',
        password: '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', // userpass
        phone_number: '555-678-9012',
        birthday: new Date('1987-07-30'),
        role: 'user',
        position_id: 'dddddddd-dddd-4ddd-dddd-dddddddddddd',
        department_id: '77777777-7777-4a77-a777-777777777777',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'pppppppp-pppp-4ppp-pppp-pppppppppppp',
        first_name: 'Robert',
        corporate_login: 'robert.wilson',
        last_name: 'Wilson',
        middle_name: 'Alan',
        email: 'robert.wilson@globalfinance.com',
        password: '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', // userpass
        phone_number: '555-789-0123',
        birthday: new Date('1983-11-14'),
        role: 'user',
        position_id: 'eeeeeeee-eeee-4eee-eeee-eeeeeeeeeeee',
        department_id: '88888888-8888-4a88-a888-888888888888',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'qqqqqqqq-qqqq-4qqq-qqqq-qqqqqqqqqqqq',
        first_name: 'Jessica',
        corporate_login: 'jessica.taylor',
        last_name: 'Taylor',
        middle_name: 'Marie',
        email: 'jessica.taylor@healthplus.com',
        password: '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', // userpass
        phone_number: '555-890-1234',
        birthday: new Date('1991-02-28'),
        role: 'admin',
        position_id: 'gggggggg-gggg-4ggg-gggg-gggggggggggg',
        department_id: '99999999-9999-4a99-a999-999999999999',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'rrrrrrrr-rrrr-4rrr-rrrr-rrrrrrrrrrrr',
        first_name: 'Thomas',
        corporate_login: 'thomas.anderson',
        last_name: 'Anderson',
        middle_name: 'William',
        email: 'thomas.anderson@healthplus.com',
        password: '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', // userpass
        phone_number: '555-901-2345',
        birthday: new Date('1986-08-07'),
        role: 'user',
        position_id: 'ffffffff-ffff-4fff-ffff-ffffffffffff',
        department_id: '99999999-9999-4a99-a999-999999999999',
        refresh_token: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    // News
    await queryInterface.bulkInsert('News', [
      {
        id: 'ssssssss-ssss-4sss-ssss-ssssssssssss',
        title: 'Q3 Financial Results',
        content: 'TechNova Solutions reports record-breaking growth in Q3 with a 25% increase in revenue compared to the previous year.',
        author_id: 'jjjjjjjj-jjjj-4jjj-jjjj-jjjjjjjjjjjj',
        company_id: '11111111-1111-4a11-a111-111111111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'tttttttt-tttt-4ttt-tttt-tttttttttttt',
        title: 'New Product Launch',
        content: 'TechNova is excited to announce the launch of our newest cloud-based solution, CloudIntegrate, coming next month.',
        author_id: 'llllllll-llll-4lll-llll-llllllllllll',
        company_id: '11111111-1111-4a11-a111-111111111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'uuuuuuuu-uuuu-4uuu-uuuu-uuuuuuuuuuuu',
        title: 'Company Retreat Announcement',
        content: 'Our annual company retreat will take place in Aspen from September 15-18. All employees are encouraged to attend.',
        author_id: 'mmmmmmmm-mmmm-4mmm-mmmm-mmmmmmmmmmmm',
        company_id: '11111111-1111-4a11-a111-111111111111',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'vvvvvvvv-vvvv-4vvv-vvvv-vvvvvvvvvvvv',
        title: 'New Partnership Announcement',
        content: 'Global Finance Partners has formed a strategic partnership with European Markets Group to expand international operations.',
        author_id: 'nnnnnnnn-nnnn-4nnn-nnnn-nnnnnnnnnnnn',
        company_id: '22222222-2222-4a22-a222-222222222222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'wwwwwwww-wwww-4www-wwww-wwwwwwwwwwww',
        title: 'Upcoming Investor Conference',
        content: 'Global Finance Partners will be hosting its annual investor conference on July 12th at the Grand Hyatt in Manhattan.',
        author_id: 'pppppppp-pppp-4ppp-pppp-pppppppppppp',
        company_id: '22222222-2222-4a22-a222-222222222222',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx',
        title: 'Breakthrough Research Publication',
        content: 'HealthPlus researchers have published groundbreaking findings on AI diagnostics in the Journal of Medical Informatics.',
        author_id: 'qqqqqqqq-qqqq-4qqq-qqqq-qqqqqqqqqqqq',
        company_id: '33333333-3333-4a33-a333-333333333333',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'yyyyyyyy-yyyy-4yyy-yyyy-yyyyyyyyyyyy',
        title: 'FDA Approval for New Medical Device',
        content: 'HealthPlus Medical Systems receives FDA approval for its innovative patient monitoring system, expected to launch in Q4.',
        author_id: 'rrrrrrrr-rrrr-4rrr-rrrr-rrrrrrrrrrrr',
        company_id: '33333333-3333-4a33-a333-333333333333',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    // Notifications
    await queryInterface.bulkInsert('Notifications', [
      {
        id: 'zzzzzzzz-zzzz-4zzz-zzzz-zzzzzzzzzzzz',
        title: 'Welcome to TechNova!',
        message: 'Welcome to the company portal. Please complete your profile and review the employee handbook.',
        read: false,
        user_id: 'kkkkkkkk-kkkk-4kkk-kkkk-kkkkkkkkkkkk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'aaaaaaaa-aaaa-4aaa-aaaa-aaaaaaaaaaab',
        title: 'New Project Assignment',
        message: 'You have been assigned to the CloudIntegrate development team. Please check your email for details.',
        read: false,
        user_id: 'kkkkkkkk-kkkk-4kkk-kkkk-kkkkkkkkkkkk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'bbbbbbbb-bbbb-4bbb-bbbb-bbbbbbbbbbbc',
        title: 'Quarterly Review Scheduled',
        message: 'Your quarterly performance review has been scheduled for next Friday at 2:00 PM.',
        read: true,
        user_id: 'llllllll-llll-4lll-llll-llllllllllll',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'cccccccc-cccc-4ccc-cccc-cccccccccccd',
        title: 'Benefits Enrollment Period',
        message: 'The annual benefits enrollment period opens next Monday. Please review your options and make any changes by the 30th.',
        read: false,
        user_id: 'mmmmmmmm-mmmm-4mmm-mmmm-mmmmmmmmmmmm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'dddddddd-dddd-4ddd-dddd-dddddddddde',
        title: 'Mandatory Training',
        message: 'Please complete the cybersecurity awareness training by the end of the week.',
        read: false,
        user_id: 'oooooooo-oooo-4ooo-oooo-oooooooooooo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'eeeeeeee-eeee-4eee-eeee-eeeeeeeeeef',
        title: 'Client Meeting Reminder',
        message: 'Reminder: Important client meeting tomorrow at 10:00 AM in Conference Room A.',
        read: true,
        user_id: 'pppppppp-pppp-4ppp-pppp-pppppppppppp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'ffffffff-ffff-4fff-ffff-ffffffffffg',
        title: 'Research Grant Approved',
        message: 'Congratulations! Your research grant proposal has been approved for funding.',
        read: false,
        user_id: 'rrrrrrrr-rrrr-4rrr-rrrr-rrrrrrrrrrrr',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    // Documents
    await queryInterface.bulkInsert('Documents', [
      {
        id: 'gggggggg-gggg-4ggg-gggg-ggggggggggh',
        title: 'Employee Handbook',
        description: 'Comprehensive guide to company policies and procedures',
        file_url: '/documents/employee_handbook_2023.pdf',
        category: 'HR',
        status: 'approved',
        uploader_id: 'mmmmmmmm-mmmm-4mmm-mmmm-mmmmmmmmmmmm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'hhhhhhhh-hhhh-4hhh-hhhh-hhhhhhhhhi',
        title: 'Product Roadmap 2023',
        description: 'Strategic product development plans for the current year',
        file_url: '/documents/product_roadmap_2023.pdf',
        category: 'Product',
        status: 'approved',
        uploader_id: 'llllllll-llll-4lll-llll-llllllllllll',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'iiiiiiii-iiii-4iii-iiii-iiiiiiiiiij',
        title: 'System Architecture',
        description: 'Technical architecture documentation for the core platform',
        file_url: '/documents/system_architecture_v2.pdf',
        category: 'Engineering',
        status: 'approved',
        uploader_id: 'jjjjjjjj-jjjj-4jjj-jjjj-jjjjjjjjjjjj',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'jjjjjjjj-jjjj-4jjj-jjjj-jjjjjjjjjjk',
        title: 'Marketing Strategy',
        description: 'Marketing strategy and campaign plans for Q3-Q4',
        file_url: '/documents/marketing_strategy_q3q4.pdf',
        category: 'Marketing',
        status: 'pending',
        uploader_id: 'kkkkkkkk-kkkk-4kkk-kkkk-kkkkkkkkkkkk',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'kkkkkkkk-kkkk-4kkk-kkkk-kkkkkkkkkkl',
        title: 'Financial Report Q2',
        description: 'Quarterly financial performance report',
        file_url: '/documents/financial_report_q2.pdf',
        category: 'Finance',
        status: 'approved',
        uploader_id: 'nnnnnnnn-nnnn-4nnn-nnnn-nnnnnnnnnnnn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'llllllll-llll-4lll-llll-lllllllllm',
        title: 'Investment Portfolio Analysis',
        description: 'Analysis of current investment portfolio performance',
        file_url: '/documents/investment_analysis_2023.pdf',
        category: 'Investment',
        status: 'approved',
        uploader_id: 'pppppppp-pppp-4ppp-pppp-pppppppppppp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'mmmmmmmm-mmmm-4mmm-mmmm-mmmmmmmmn',
        title: 'Clinical Trial Results',
        description: 'Results from Phase II clinical trials of Medical Monitor device',
        file_url: '/documents/clinical_trial_phase2.pdf',
        category: 'Research',
        status: 'draft',
        uploader_id: 'rrrrrrrr-rrrr-4rrr-rrrr-rrrrrrrrrrrr',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'nnnnnnnn-nnnn-4nnn-nnnn-nnnnnnnno',
        title: 'Patent Application',
        description: 'Draft patent application for new diagnostic technology',
        file_url: '/documents/patent_application_v1.pdf',
        category: 'Legal',
        status: 'pending',
        uploader_id: 'qqqqqqqq-qqqq-4qqq-qqqq-qqqqqqqqqqqq',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'oooooooo-oooo-4ooo-oooo-ooooooooop',
        title: 'Security Protocols',
        description: 'Information security protocols and best practices',
        file_url: '/documents/security_protocols_2023.pdf',
        category: 'IT',
        status: 'approved',
        uploader_id: 'jjjjjjjj-jjjj-4jjj-jjjj-jjjjjjjjjjjj',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'pppppppp-pppp-4ppp-pppp-pppppppppq',
        title: 'Training Materials',
        description: 'New hire training curriculum and materials',
        file_url: '/documents/new_hire_training.pdf',
        category: 'HR',
        status: 'approved',
        uploader_id: 'mmmmmmmm-mmmm-4mmm-mmmm-mmmmmmmmmmmm',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Remove all seeded data in reverse order to respect foreign key constraints
    await queryInterface.bulkDelete('Documents', null, {});
    await queryInterface.bulkDelete('Notifications', null, {});
    await queryInterface.bulkDelete('News', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Positions', null, {});
    await queryInterface.bulkDelete('Departments', null, {});
    await queryInterface.bulkDelete('Companies', null, {});
  }
};