// src/controllers/company.controller.ts
import { Request, Response } from 'express';
import Company from '../models/company.ts';

export const createCompany = async (req: Request, res: Response) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Error creating company', error });
  }
};

export const getCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await Company.findAll();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching companies', error });
  }
};