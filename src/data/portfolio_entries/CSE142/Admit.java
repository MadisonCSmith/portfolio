// Madison Smith
// 2/4/15
// CSE 142 
// TA: Carl Ross
// Assignment #4

// This program will compare two applicants to 
// determine who is the better applicant.
import java.util.*;

public class Admit {

   public static void main(String[] args) {
      Scanner console = new Scanner(System.in);
      intro();
      System.out.println("Information for applicant #1:");
      double exam1 = whichTest(console); 
      double gpa1 = gpa(console);
      System.out.println();
      System.out.println("Information for applicant #2");
      double exam2 = whichTest(console);
      double gpa2 = gpa(console); 
      System.out.println();
      overallScores(exam1, gpa1, exam2, gpa2);
   }   
   
   // This method introduces the user to what the program does.
   public static void intro() {
      System.out.println("This program compare two applicants to");
      System.out.println("determine which one seems like the stronger");
      System.out.println("applicant. For each candidate I will need");
      System.out.println("either SAT or ACT scores plus a weighted GPA.");
      System.out.println();
   }  
   
   
   // This method determines if the applicant has SAT or ACT scores,
   // calls the appropiate method, and returns the exam scores to main.
   public static double whichTest(Scanner console) {
      System.out.print("   do you have 1) SAT scores or 2) ACT scores? ");
      int test = console.nextInt();
      if (test == 1) {
         double exam = sat(console);
         return exam;
      } else {
         double exam = act(console); 
         return exam;
      }
   }
   
   // This method asks for SAT math, reading, and writing scores,
   // calculates and prints the exam score, and returns the 
   // score to the whichTest method.
   public static double sat(Scanner console) {
      System.out.print("   SAT math? ");
      int math = console.nextInt();
      System.out.print("   SAT critical reading? ");
      int reading = console.nextInt();
      System.out.print("   SAT writing? ");
      int writing = console.nextInt();
      double exam = (2 * math + reading + writing) / 32.0;
      double finalexam = round1(exam);
      System.out.println("   exam score = " + finalexam);
      return exam;
   }
  
   // This method asks for ACT math, english, science, and reading
   // scores, calculates and prints the exam score and returns 
   // the score to the whichTest method.
   public static double act(Scanner console) {
      System.out.print("   ACT English? ");
      int english = console.nextInt();
      System.out.print("   ACT math? ");
      int math = console.nextInt();
      System.out.print("   ACT reading? ");
      int reading = console.nextInt();
      System.out.print("   ACT science? ");
      int science = console.nextInt();
      double exam = (english + 2 * math + reading + science) / 1.8;
      double roundedExam = round1(exam);
      System.out.println("   exam score = " + roundedExam);
      return exam;
   }
   
   // This method asks for the GPA, max GPA, and transcript multiplier of an
   // applicant, calculates and prints the GPA score, and returns the exam 
   // score to main.
   public static double gpa(Scanner console) {
      System.out.print("   overall GPA? ");
      double gpa = console.nextDouble();
      System.out.print("   max GPA? ");
      double max = console.nextDouble();
      System.out.print("   Transcript Multiplier? ");
      double multiplier = console.nextDouble();
      double finalGpa = (gpa / max) * 100 * multiplier;
      double roundedGpa = round1(finalGpa);
      System.out.println("   GPA score = " + roundedGpa);
      return finalGpa;
   }
   
   // This method uses the test scores and GPA scores for the two 
   // applicants, calculates their overall scores, and determines 
   // who is the better applicant.
   public static void overallScores(double test1, double gpa1, double test2, double gpa2) {
      double score1 = (test1 + gpa1);
      double finalscore1 = round1(score1);
      System.out.println("First applicant overall score = " + finalscore1);
      double score2 = test2 + gpa2;
      double finalscore2 = round1(score2);
      System.out.println("Second applicant overall score = " + finalscore2);
      if (finalscore1 > finalscore2) {
         System.out.println("The first applicant seems to be better");
      } else if (finalscore2 > finalscore1) {
         System.out.println("The second applicant seems to be better");
      } else {
         System.out.println("The two applicants seem to be equal");
      }
   }
   
   // This method rounds exam scores, GPA scores, and overall scores to 
   // a single decimal place.
   public static double round1(double n) {
      return Math.round(n * 10.0) / 10.0;
   }
}
   
      