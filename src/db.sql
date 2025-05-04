-- seed-data.sql
-- SQL INSERT statements to populate tables created by Sequelize ORM

-- Insert data into companies table
INSERT INTO "companies" (id, name, description, address, "createdAt", "updatedAt") VALUES
('11111111-1111-4a11-a111-111111111111', 'TechNova Solutions', 'A leading technology solutions provider specializing in enterprise software development and cloud infrastructure.', '123 Innovation Drive, San Francisco, CA 94103', NOW(), NOW()),
('22222222-2222-4a22-a222-222222222222', 'Global Finance Partners', 'International financial services firm offering investment banking, wealth management, and consulting services.', '456 Wall Street, New York, NY 10005', NOW(), NOW()),
('33333333-3333-4a33-a333-333333333333', 'HealthPlus Medical Systems', 'Healthcare technology company developing advanced medical software and patient management solutions.', '789 Wellness Blvd, Boston, MA 02115', NOW(), NOW());

-- Insert data into departments table
INSERT INTO "departments" (id, name, description, company_id, "createdAt", "updatedAt") VALUES
('44444444-4444-4a44-a444-444444444444', 'Engineering', 'Software engineering and development team', '11111111-1111-4a11-a111-111111111111', NOW(), NOW()),
('55555555-5555-4a55-a555-555555555555', 'Product Management', 'Product strategy and management department', '11111111-1111-4a11-a111-111111111111', NOW(), NOW()),
('66666666-6666-4a66-a666-666666666666', 'Human Resources', 'Personnel management and company culture development', '11111111-1111-4a11-a111-111111111111', NOW(), NOW()),
('77777777-7777-4a77-a777-777777777777', 'Finance', 'Financial operations and reporting', '22222222-2222-4a22-a222-222222222222', NOW(), NOW()),
('88888888-8888-4a88-a888-888888888888', 'Investment Banking', 'Corporate finance and advisory services', '22222222-2222-4a22-a222-222222222222', NOW(), NOW()),
('99999999-9999-4a99-a999-999999999999', 'Research & Development', 'Medical research and technology innovation', '33333333-3333-4a33-a333-333333333333', NOW(), NOW());

-- Insert data into positions table
INSERT INTO "positions" (id, name, description, "createdAt", "updatedAt") VALUES
('a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1', 'Software Engineer', 'Develops and maintains software applications and systems', NOW(), NOW()),
('b2b2b2b2-b2b2-4b2b-b2b2-b2b2b2b2b2b2', 'Product Manager', 'Manages product lifecycle and development processes', NOW(), NOW()),
('c3c3c3c3-c3c3-4c3c-c3c3-c3c3c3c3c3c3', 'HR Specialist', 'Handles employee relations and recruitment processes', NOW(), NOW()),
('d4d4d4d4-d4d4-4d4d-d4d4-d4d4d4d4d4d4', 'Financial Analyst', 'Analyzes financial data and prepares reports', NOW(), NOW()),
('e5e5e5e5-e5e5-4e5e-e5e5-e5e5e5e5e5e5', 'Investment Banker', 'Provides financial advisory services to clients', NOW(), NOW()),
('f6f6f6f6-f6f6-4f6f-f6f6-f6f6f6f6f6f6', 'Medical Researcher', 'Conducts research on medical technology and solutions', NOW(), NOW()),
('a7a7a7a7-a7a7-4a7a-a7a7-a7a7a7a7a7a7', 'Department Manager', 'Oversees department operations and staff', NOW(), NOW()),
('b8b8b8b8-b8b8-4b8b-b8b8-b8b8b8b8b8b8', 'CTO', 'Chief Technology Officer', NOW(), NOW()),
('c9c9c9c9-c9c9-4c9c-c9c9-c9c9c9c9c9c9', 'CEO', 'Chief Executive Officer', NOW(), NOW());

-- Insert data into users table
INSERT INTO "users" (id, first_name, corporate_login, last_name, middle_name, email, password, phone_number, birthday, role, position_id, department_id, refresh_token, "createdAt", "updatedAt") VALUES
('d0d0d0d0-d0d0-4d0d-d0d0-d0d0d0d0d0d0', 'John', 'john.doe', 'Doe', 'Robert', 'john.doe@technova.com', '$2a$10$hACwQ5/HQI6FhbIISOUVeusy3sKyUDhSq36fF5d/54aAdiygJPFzm', '555-123-4567', '1985-06-15', 'admin', 'b8b8b8b8-b8b8-4b8b-b8b8-b8b8b8b8b8b8', '44444444-4444-4a44-a444-444444444444', NULL, NOW(), NOW()),
('e1e1e1e1-e1e1-4e1e-e1e1-e1e1e1e1e1e1', 'Jane', 'jane.smith', 'Smith', 'Elizabeth', 'jane.smith@technova.com', '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', '555-234-5678', '1990-03-22', 'user', 'a1a1a1a1-a1a1-4a1a-a1a1-a1a1a1a1a1a1', '44444444-4444-4a44-a444-444444444444', NULL, NOW(), NOW()),
('f2f2f2f2-f2f2-4f2f-f2f2-f2f2f2f2f2f2', 'Michael', 'michael.johnson', 'Johnson', 'Thomas', 'michael.johnson@technova.com', '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', '555-345-6789', '1988-09-10', 'user', 'b2b2b2b2-b2b2-4b2b-b2b2-b2b2b2b2b2b2', '55555555-5555-4a55-a555-555555555555', NULL, NOW(), NOW()),
('a3a3a3a3-a3a3-4a3a-a3a3-a3a3a3a3a3a3', 'Emily', 'emily.williams', 'Williams', 'Rose', 'emily.williams@technova.com', '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', '555-456-7890', '1992-12-05', 'user', 'c3c3c3c3-c3c3-4c3c-c3c3-c3c3c3c3c3c3', '66666666-6666-4a66-a666-666666666666', NULL, NOW(), NOW()),
('b4b4b4b4-b4b4-4b4b-b4b4-b4b4b4b4b4b4', 'David', 'david.brown', 'Brown', 'James', 'david.brown@globalfinance.com', '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', '555-567-8901', '1980-04-18', 'admin', 'c9c9c9c9-c9c9-4c9c-c9c9-c9c9c9c9c9c9', '77777777-7777-4a77-a777-777777777777', NULL, NOW(), NOW()),
('c5c5c5c5-c5c5-4c5c-c5c5-c5c5c5c5c5c5', 'Sarah', 'sarah.miller', 'Miller', 'Jean', 'sarah.miller@globalfinance.com', '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', '555-678-9012', '1987-07-30', 'user', 'd4d4d4d4-d4d4-4d4d-d4d4-d4d4d4d4d4d4', '77777777-7777-4a77-a777-777777777777', NULL, NOW(), NOW()),
('d6d6d6d6-d6d6-4d6d-d6d6-d6d6d6d6d6d6', 'Robert', 'robert.wilson', 'Wilson', 'Alan', 'robert.wilson@globalfinance.com', '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', '555-789-0123', '1983-11-14', 'user', 'e5e5e5e5-e5e5-4e5e-e5e5-e5e5e5e5e5e5', '88888888-8888-4a88-a888-888888888888', NULL, NOW(), NOW()),
('e7e7e7e7-e7e7-4e7e-e7e7-e7e7e7e7e7e7', 'Jessica', 'jessica.taylor', 'Taylor', 'Marie', 'jessica.taylor@healthplus.com', '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', '555-890-1234', '1991-02-28', 'admin', 'a7a7a7a7-a7a7-4a7a-a7a7-a7a7a7a7a7a7', '99999999-9999-4a99-a999-999999999999', NULL, NOW(), NOW()),
('f8f8f8f8-f8f8-4f8f-f8f8-f8f8f8f8f8f8', 'Thomas', 'thomas.anderson', 'Anderson', 'William', 'thomas.anderson@healthplus.com', '$2a$10$Lcj1Ck9s5UC.rfQdyAY.W.U8BWk0wb9hbzLXIvghTZDPu.ZjLQnie', '555-901-2345', '1986-08-07', 'user', 'f6f6f6f6-f6f6-4f6f-f6f6-f6f6f6f6f6f6', '99999999-9999-4a99-a999-999999999999', NULL, NOW(), NOW());

-- Insert data into news table
INSERT INTO "news" (id, title, content, author_id, company_id, "createdAt", "updatedAt") VALUES
('a9a9a9a9-a9a9-4a9a-a9a9-a9a9a9a9a9a9', 'Q3 Financial Results', 'TechNova Solutions reports record-breaking growth in Q3 with a 25% increase in revenue compared to the previous year.', 'd0d0d0d0-d0d0-4d0d-d0d0-d0d0d0d0d0d0', '11111111-1111-4a11-a111-111111111111', NOW(), NOW()),
('b0b0b0b0-b0b0-4b0b-b0b0-b0b0b0b0b0b0', 'New Product Launch', 'TechNova is excited to announce the launch of our newest cloud-based solution, CloudIntegrate, coming next month.', 'f2f2f2f2-f2f2-4f2f-f2f2-f2f2f2f2f2f2', '11111111-1111-4a11-a111-111111111111', NOW(), NOW()),
('c1c1c1c1-c1c1-4c1c-c1c1-c1c1c1c1c1c1', 'Company Retreat Announcement', 'Our annual company retreat will take place in Aspen from September 15-18. All employees are encouraged to attend.', 'a3a3a3a3-a3a3-4a3a-a3a3-a3a3a3a3a3a3', '11111111-1111-4a11-a111-111111111111', NOW(), NOW()),
('d2d2d2d2-d2d2-4d2d-d2d2-d2d2d2d2d2d2', 'New Partnership Announcement', 'Global Finance Partners has formed a strategic partnership with European Markets Group to expand international operations.', 'b4b4b4b4-b4b4-4b4b-b4b4-b4b4b4b4b4b4', '22222222-2222-4a22-a222-222222222222', NOW(), NOW()),
('e3e3e3e3-e3e3-4e3e-e3e3-e3e3e3e3e3e3', 'Upcoming Investor Conference', 'Global Finance Partners will be hosting its annual investor conference on July 12th at the Grand Hyatt in Manhattan.', 'd6d6d6d6-d6d6-4d6d-d6d6-d6d6d6d6d6d6', '22222222-2222-4a22-a222-222222222222', NOW(), NOW()),
('f4f4f4f4-f4f4-4f4f-f4f4-f4f4f4f4f4f4', 'Breakthrough Research Publication', 'HealthPlus researchers have published groundbreaking findings on AI diagnostics in the Journal of Medical Informatics.', 'e7e7e7e7-e7e7-4e7e-e7e7-e7e7e7e7e7e7', '33333333-3333-4a33-a333-333333333333', NOW(), NOW()),
('a5a5a5a5-a5a5-4a5a-a5a5-a5a5a5a5a5a5', 'FDA Approval for New Medical Device', 'HealthPlus Medical Systems receives FDA approval for its innovative patient monitoring system, expected to launch in Q4.', 'f8f8f8f8-f8f8-4f8f-f8f8-f8f8f8f8f8f8', '33333333-3333-4a33-a333-333333333333', NOW(), NOW());

-- Insert data into notifications table
INSERT INTO "notifications" (id, title, message, read, user_id, "createdAt", "updatedAt") VALUES
('b6b6b6b6-b6b6-4b6b-b6b6-b6b6b6b6b6b6', 'Welcome to TechNova!', 'Welcome to the company portal. Please complete your profile and review the employee handbook.', false, 'e1e1e1e1-e1e1-4e1e-e1e1-e1e1e1e1e1e1', NOW(), NOW()),
('c7c7c7c7-c7c7-4c7c-c7c7-c7c7c7c7c7c7', 'New Project Assignment', 'You have been assigned to the CloudIntegrate development team. Please check your email for details.', false, 'e1e1e1e1-e1e1-4e1e-e1e1-e1e1e1e1e1e1', NOW(), NOW()),
('d8d8d8d8-d8d8-4d8d-d8d8-d8d8d8d8d8d8', 'Quarterly Review Scheduled', 'Your quarterly performance review has been scheduled for next Friday at 2:00 PM.', true, 'f2f2f2f2-f2f2-4f2f-f2f2-f2f2f2f2f2f2', NOW(), NOW()),
('e9e9e9e9-e9e9-4e9e-e9e9-e9e9e9e9e9e9', 'Benefits Enrollment Period', 'The annual benefits enrollment period opens next Monday. Please review your options and make any changes by the 30th.', false, 'a3a3a3a3-a3a3-4a3a-a3a3-a3a3a3a3a3a3', NOW(), NOW()),
('f0f0f0f0-f0f0-4f0f-f0f0-f0f0f0f0f0f0', 'Mandatory Training', 'Please complete the cybersecurity awareness training by the end of the week.', false, 'c5c5c5c5-c5c5-4c5c-c5c5-c5c5c5c5c5c5', NOW(), NOW()),
('a1b2c3d4-e5f6-4a7b-8c9d-e0f1a2b3c4d5', 'Client Meeting Reminder', 'Reminder: Important client meeting tomorrow at 10:00 AM in Conference Room A.', true, 'd6d6d6d6-d6d6-4d6d-d6d6-d6d6d6d6d6d6', NOW(), NOW()),
('b2c3d4e5-f6a7-4b8c-9d0e-f1a2b3c4d5e6', 'Research Grant Approved', 'Congratulations! Your research grant proposal has been approved for funding.', false, 'f8f8f8f8-f8f8-4f8f-f8f8-f8f8f8f8f8f8', NOW(), NOW());

-- Insert data into documents table
-- INSERT INTO "documents" (id, title, description, file_url, category, status, uploader_id, "createdAt", "updatedAt") VALUES
-- ('c3d4e5f6-a7b8-4c9d-0ef1-a2b3c4d5e6f7', 'Employee Handbook', 'Comprehensive guide to company policies and procedures', '/documents/employee_handbook_2023.pdf', 'HR', 'approved', 'a3a3a3a3-a3a3-4a3a-a3a3-a3a3a3a3a3a3', NOW(), NOW()),
-- ('d4e5f6a7-b8c9-4d0e-f1a2-b3c4d5e6f7a8', 'Product Roadmap 2023', 'Strategic product development plans for the current year', '/documents/product_roadmap_2023.pdf', 'Product', 'approved', 'f2f2f2f2-f2f2-4f2f-f2f2-f2f2f2f2f2f2', NOW(), NOW()),
-- ('e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b', 'System Architecture', 'Technical architecture documentation for the core platform', '/documents/system_architecture_v2.pdf', 'Engineering', 'approved', 'd0d0d0d0-d0d0-4d0d-d0d0-d0d0d0d0d0d0', NOW(), NOW()),
-- ('f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', 'Marketing Strategy', 'Marketing strategy and campaign plans for Q3-Q4', '/documents/marketing_strategy_q3q4.pdf', 'Marketing', 'pending', 'e1e1e1e1-e1e1-4e1e-e1e1-e1e1e1e1e1e1', NOW(), NOW()),
-- ('a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d', 'Financial Report Q2', 'Quarterly financial performance report', '/documents/financial_report_q2.pdf', 'Finance', 'approved', 'b4b4b4b4-b4b4-4b4b-b4b4-b4b4b4b4b4b4', NOW(), NOW()),
-- ('b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d2e', 'Investment Portfolio Analysis', 'Analysis of current investment portfolio performance', '/documents/investment_analysis_2023.pdf', 'Investment', 'approved', 'd6d6d6d6-d6d6-4d6d-d6d6-d6d6d6d6d6d6', NOW(), NOW()),
-- ('c9d0e1f2-a3b4-4c5d-6e7f-8a9b0c1d2e3f', 'Clinical Trial Results', 'Results from Phase II clinical trials of Medical Monitor device', '/documents/clinical_trial_phase2.pdf', 'Research', 'draft', 'f8f8f8f8-f8f8-4f8f-f8f8-f8f8f8f8f8f8', NOW(), NOW()),
-- ('d0e1f2a3-b4c5-4d6e-7f8a-9b0c1d2e3f4a', 'Patent Application', 'Draft patent application for new diagnostic technology', '/documents/patent_application_v1.pdf', 'Legal', 'pending', 'e7e7e7e7-e7e7-4e7e-e7e7-e7e7e7e7e7e7', NOW(), NOW()),
-- ('e1f2a3b4-c5d6-4e7f-8a9b-0c1d2e3f4a5b', 'Security Protocols', 'Information security protocols and best practices', '/documents/security_protocols_2023.pdf', 'IT', 'approved', 'd0d0d0d0-d0d0-4d0d-d0d0-d0d0d0d0d0d0', NOW(), NOW()),
-- ('f2a3b4c5-d6e7-4f8a-9b0c-1d2e3f4a5b6c', 'Training Materials', 'New hire training curriculum and materials', '/documents/new_hire_training.pdf', 'HR', 'approved', 'a3a3a3a3-a3a3-4a3a-a3a3-a3a3a3a3a3a3', NOW(), NOW());