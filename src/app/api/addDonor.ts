// pages/api/addDonor.ts

import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { lastName, firstName, middleName, age, sex, bloodSampleAcquisitionDate, practitionersName} = req.body;

      const newDonor = await prisma.donorInformation.create({
        data: {
          lastName,
          firstName,
          middleName,
          age,
          sex,
          bloodSampleAcquisitionDate,
          practitionersName,
        },
      });

      res.status(201).json({ success: true, data: newDonor });
    } catch (error) {
      console.error('Error adding donor:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
