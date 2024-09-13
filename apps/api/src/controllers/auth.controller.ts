import { Request, Response } from 'express';
import * as authService from '../services/authServices';
import { generateToken } from '@/utils/jwt';
import { validationResult } from 'express-validator';

export const register = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;
    const bodyRequest = {
      name: name,
      email: email,
      password: password,
      role: role,
    };
    await authService.register(bodyRequest);
    res.status(201).send({
      message: 'User registered successfully',
    });
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;
    const bodyRequest = {
      name: name,
      email: email,
      password: password,
      role: role,
    };
    const user = await authService.login(bodyRequest);
    const token = generateToken(user.id);
    console.log(user);
    res.status(200).send({
      message: 'User Logged In',
      token: token,
      role: user.role,
    });
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};
