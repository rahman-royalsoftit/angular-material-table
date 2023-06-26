import {  Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface Student{
  studentID : number,
  studentName : string,
  rollNo : string,
  mobileNo : string,
  dateOfBirth : string,
  admissionDate : string,
  gender : string,
  religionName : string,
  profileImage : string,
  className : string,
  sectionName : string,
  fathersName : string,
}


@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  
  displayedColumns = ['slNo', 'studentID', 'className', 'sectionName', 'profileImage', 'studentName','rollNo',  'gender', 'mobileNo', 'dateOfBirth'];
  dataSource !: MatTableDataSource<Student>; // = new MatTableDataSource(this.studentData);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  imageUrl: string = "/assets/image/";

  studentData : Student[] = [
   
    {
      "studentID": 1,  "rollNo": "1", "studentName": "Habiba Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "PLAY",  "sectionName": "PLAY-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 2,  "rollNo": "2", "studentName": "Aabir",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "PLAY",  "sectionName": "PLAY-A",  "fathersName": "Aamir Hossain"
    },
    {
      "studentID": 3,  "rollNo": "3", "studentName": "Sonali",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "PLAY",  "sectionName": "PLAY-A",  "fathersName": "Azhaar Udding"
    },
    {
      "studentID": 4,  "rollNo": "4", "studentName": "Aajim",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "PLAY",  "sectionName": "PLAY-A",  "fathersName": "Aazeez"
    },
    {
      "studentID": 5,  "rollNo": "5", "studentName": "Ehsaan",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "PLAY",  "sectionName": "PLAY-A",  "fathersName": "Aslaam"
    },
    {
      "studentID": 6,  "rollNo": "1", "studentName": "Asfaaq",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "PLAY",  "sectionName": "PLAY-B",  "fathersName": "Amjaad"
    },
    {
      "studentID": 7,  "rollNo": "2", "studentName": "Khadiza Akter",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "PLAY",  "sectionName": "PLAY-B",  "fathersName": "Bashir Uddin"
    },
    {
      "studentID": 8,  "rollNo": "3", "studentName": "Faahim",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "PLAY",  "sectionName": "PLAY-B",  "fathersName": "Bahaar Uddin"
    },
    {
      "studentID": 9,  "rollNo": "4", "studentName": "Faisaal",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "PLAY",  "sectionName": "PLAY-B",  "fathersName": "Farhaan"
    },
    {
      "studentID": 10,  "rollNo": "5", "studentName": "Zara",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "PLAY",  "sectionName": "PLAY-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 11,  "rollNo": "1", "studentName": "Mahira",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "NURSERY",  "sectionName": "NUR-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 14,  "rollNo": "2", "studentName": "Farid",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "NURSERY",  "sectionName": "NUR-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 12,  "rollNo": "3", "studentName": "Ruhi",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "NURSERY",  "sectionName": "NUR-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 15,  "rollNo": "4", "studentName": "Fayej ",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "NURSERY",  "sectionName": "NUR-A",  "fathersName": "Farhaan"
    },
    {
      "studentID": 13,  "rollNo": "5", "studentName": "Jannat",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "NURSERY",  "sectionName": "NUR-A",  "fathersName": "Masudur Rahman"
    },
   
   
    {
      "studentID": 16,  "rollNo": "1", "studentName": "Farhaan",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "NURSERY",  "sectionName": "NUR-B",  "fathersName": "Fayej"
    },
    {
      "studentID": 17,  "rollNo": "2", "studentName": "Gofraan",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "NURSERY",  "sectionName": "NUR-B",  "fathersName": "Firoj"
    },
    {
      "studentID": 18,  "rollNo": "3", "studentName": "Habiba Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "NURSERY",  "sectionName": "NUR-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 19,  "rollNo": "4", "studentName": "Habib",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "NURSERY",  "sectionName": "NUR-B",  "fathersName": "Hamid"
    },
    {
      "studentID": 20,  "rollNo": "5", "studentName": "Maria Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "NURSERY",  "sectionName": "NUR-B",  "fathersName": "Hasibur Rahman"
    },
    {
      "studentID": 21,  "rollNo": "1", "studentName": "Saima Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "ONE",  "sectionName": "ONE-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 22,  "rollNo": "2", "studentName": "Bushra",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "ONE",  "sectionName": "ONE-A",  "fathersName": "Hanif"
    },
    {
      "studentID": 23,  "rollNo": "3", "studentName": "Hanif",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "ONE",  "sectionName": "ONE-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 24,  "rollNo": "4", "studentName": "Hasaan",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "ONE",  "sectionName": "ONE-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 25,  "rollNo": "5", "studentName": " Ishraq",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "ONE",  "sectionName": "ONE-A",  "fathersName": "Irfaan"
    },
    {
      "studentID": 26,  "rollNo": "1", "studentName": "Irfaan",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "ONE",  "sectionName": "ONE-B",  "fathersName": "Ibrahim"
    },
    {
      "studentID": 27,  "rollNo": "2", "studentName": "Ibrahim",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "ONE",  "sectionName": "ONE-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 28,  "rollNo": "3", "studentName": "Jaseem",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "ONE",  "sectionName": "ONE-B",  "fathersName": "Jazaal"
    },
    {
      "studentID": 29,  "rollNo": "4", "studentName": "Jamil",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "ONE",  "sectionName": "ONE-B",  "fathersName": "Jahiruddin"
    },
    {
      "studentID": 30,  "rollNo": "5", "studentName": "Jahiruddin",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "ONE",  "sectionName": "ONE-B",  "fathersName": "Jiya -ul- haq"
    },
    {
      "studentID": 31,  "rollNo": "1", "studentName": "Jiya -ul- haq",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "TWO",  "sectionName": "TWO-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 32,  "rollNo": "2", "studentName": "Lubna",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "TWO",  "sectionName": "TWO-A",  "fathersName": "Hasan"
    },
    {
      "studentID": 33,  "rollNo": "3", "studentName": "Liza Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "TWO",  "sectionName": "TWO-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 34,  "rollNo": "4", "studentName": "Asma Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "TWO",  "sectionName": "TWO-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 35,  "rollNo": "5", "studentName": "Kamaal",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "TWO",  "sectionName": "TWO-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 36,  "rollNo": "1", "studentName": "Kanbir",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "TWO",  "sectionName": "TWO-B",  "fathersName": "Kader"
    },
    {
      "studentID": 37,  "rollNo": "2", "studentName": "Kader",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "TWO",  "sectionName": "TWO-B",  "fathersName": "Khairul"
    },
    {
      "studentID": 38,  "rollNo": "3", "studentName": "Khairul",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "TWO",  "sectionName": "TWO-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 39,  "rollNo": "4", "studentName": "Sonia Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "TWO",  "sectionName": "TWO-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 40,  "rollNo": "5", "studentName": "Mahreen",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "TWO",  "sectionName": "TWO-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 41,  "rollNo": "1", "studentName": "Rabia Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "THREE",  "sectionName": "THREE-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 42,  "rollNo": "2", "studentName": "Laatif",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "THREE",  "sectionName": "THREE-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 43,  "rollNo": "3", "studentName": "Labeeb",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "THREE",  "sectionName": "THREE-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 44,  "rollNo": "4", "studentName": "Munwaar",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "THREE",  "sectionName": "THREE-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 45,  "rollNo": "5", "studentName": "Maahir",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "THREE",  "sectionName": "THREE-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 46,  "rollNo": "1", "studentName": "Salma Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "THREE",  "sectionName": "THREE-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 47,  "rollNo": "2", "studentName": "Asma Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "THREE",  "sectionName": "THREE-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 48,  "rollNo": "3", "studentName": "Habiba Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "THREE",  "sectionName": "THREE-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 49,  "rollNo": "4", "studentName": "Mehboob",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "THREE",  "sectionName": "THREE-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 50,  "rollNo": "5", "studentName": "Morshed",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "THREE",  "sectionName": "THREE-B",  "fathersName": "Mustafij"
    },
    {
      "studentID": 51,  "rollNo": "1", "studentName": "Parul Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "FOUR",  "sectionName": "FOUR-A",  "fathersName": "Mustafij"
    },
    {
      "studentID": 52,  "rollNo": "2", "studentName": "Mustafij",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "FOUR",  "sectionName": "FOUR-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 53,  "rollNo": "3", "studentName": "Halima Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "FOUR",  "sectionName": "FOUR-A",  "fathersName": "Mohasin"
    },
    {
      "studentID": 54,  "rollNo": "4", "studentName": "Mustafa",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "FOUR",  "sectionName": "FOUR-A",  "fathersName": "Mosaddek"
    },
    {
      "studentID": 55,  "rollNo": "5", "studentName": "Rupali Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "FOUR",  "sectionName": "FOUR-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 56,  "rollNo": "1", "studentName": "Sabina Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "FOUR",  "sectionName": "FOUR-B",  "fathersName": "Mansoor"
    },
    {
      "studentID": 57,  "rollNo": "2", "studentName": "Mansoor",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "FOUR",  "sectionName": "FOUR-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 58,  "rollNo": "3", "studentName": "Nadeem",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "FOUR",  "sectionName": "FOUR-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 59,  "rollNo": "4", "studentName": "Nasir",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "FOUR",  "sectionName": "FOUR-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 60,  "rollNo": "5", "studentName": "Rabbani",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "FOUR",  "sectionName": "FOUR-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 61,  "rollNo": "1", "studentName": "Laboni Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "FIVE",  "sectionName": "FIVE-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 62,  "rollNo": "2", "studentName": "Ruma Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "FIVE",  "sectionName": "FIVE-A",  "fathersName": "Rashid"
    },
    {
      "studentID": 63,  "rollNo": "3", "studentName": "Rashid",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "FIVE",  "sectionName": "FIVE-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 64,  "rollNo": "4", "studentName": "Rizwan",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "FIVE",  "sectionName": "FIVE-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 65,  "rollNo": "5", "studentName": "Shameem",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "FIVE",  "sectionName": "FIVE-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 66,  "rollNo": "1", "studentName": "Shamima Akther",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "FIVE",  "sectionName": "FIVE-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 67,  "rollNo": "2", "studentName": "Adiba",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "FIVE",  "sectionName": "FIVE-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 68,  "rollNo": "3", "studentName": "Shakil",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "FIVE",  "sectionName": "FIVE-B",  "fathersName": "Shaadmaan"
    },
    {
      "studentID": 69,  "rollNo": "4", "studentName": "Shaadmaan",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "FIVE",  "sectionName": "FIVE-B",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 70,  "rollNo": "5", "studentName": "Nurin",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "FIVE",  "sectionName": "FIVE-B",  "fathersName": "Tanveer"
    },
    {
      "studentID": 71,  "rollNo": "1", "studentName": "Akther Hossain",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "SIX",  "sectionName": "SIX-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 72,  "rollNo": "2", "studentName": "Adiba",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "SIX",  "sectionName": "SIX-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 73,  "rollNo": "3", "studentName": "Amirul",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "SIX",  "sectionName": "SIX-A",  "fathersName": "Shaadmaan"
    },
    {
      "studentID": 74,  "rollNo": "4", "studentName": "Sultan",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "SIX",  "sectionName": "SIX-A",  "fathersName": "Masudur Rahman"
    },
    {
      "studentID": 75,  "rollNo": "5", "studentName": "Jasmin",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "SIX",  "sectionName": "SIX-A",  "fathersName": "Tanveer"
    },
    {
      "studentID": 76,  "rollNo": "1", "studentName": "Salma",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "SIX",  "sectionName": "SIX-B",  "fathersName": "Tanveer"
    },
    {
      "studentID": 77,  "rollNo": "2", "studentName": "Aslam",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "SIX",  "sectionName": "SIX-B",  "fathersName": "Tanveer"
    },
    {
      "studentID": 78,  "rollNo": "3", "studentName": "Umama",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Female",  "religionName": "Islam",   "profileImage": "Female.png",
      "className": "SIX",  "sectionName": "SIX-B",  "fathersName": "Tanveer"
    },
    {
      "studentID": 79,  "rollNo": "4", "studentName": "Kabir",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "SIX",  "sectionName": "SIX-B",  "fathersName": "Tanveer"
    },
    {
      "studentID": 80,  "rollNo": "5", "studentName": "Jakir",  "mobileNo": "00000000000",  "dateOfBirth": "2010-06-22T00:00:00",
      "admissionDate": "2014-12-24T00:00:00",  "gender": "Male",  "religionName": "Islam",   "profileImage": "Male.png",
      "className": "SIX",  "sectionName": "SIX-B",  "fathersName": "Tanveer"
    },
    
   
  ]
  
  
  ngOnInit(){
    this.loadData();
  }

  loadData(){
 
    this.dataSource = new MatTableDataSource(this.studentData);
   // this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    
    //ngAfterViewInit() is called after the view is initially rendered. 
    //This is why @ViewChild() depends on it. You can't access view members before they are rendered.
    this.dataSource.paginator = this.paginator;    
    this.dataSource.sort = this.sort;    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

