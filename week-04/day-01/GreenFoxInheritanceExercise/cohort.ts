'use strict';

import { Student } from './student';
import { Mentor } from './mentor';

export class Cohort{

  protected _name: string;
  protected _students: Student[];
  protected _mentors: Mentor[];

  constructor(name: string) {
    this._name = name;
    this._students = [];
    this._mentors = [];    
  }

  public addStudent(Student: Student): void {
    this._students.push(Student); 
  }
    
  public addMentor(Mentor: Mentor): void{
    this._mentors.push(Mentor);
    
  }
  public info(): void {
    console.log(`The ${this._name} cohort has ${this._students.length} students and ${this._mentors.length} mentors`);
  }
    

}