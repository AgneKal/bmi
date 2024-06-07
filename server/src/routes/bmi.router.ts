import express from 'express';
import { BmiController } from '../controllers/bmi.controller.js';

const bmiRouter=express.Router();

bmiRouter.post('/bmi', BmiController.calculateBmi);


export {bmiRouter};