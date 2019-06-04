import java.util.*;
import java.io.*;
import java.io.File;

public class code {
	public static int totalCount;
	public static int numPatWDiag;
	public static int totalDiag;
	public static int totalDistinctDiag;
	public static Map<String, Integer> map;
	
	public static void main(String[] args) throws FileNotFoundException {
		map = new HashMap<String, Integer>();
		totalCount = 0;
        numPatWDiag = 0;
        totalDiag = 0;
        totalDistinctDiag = 0;
        
		readInData();
		createTable();
		printStats();
	}
	
	// goes through all the the files in the "DischargeNotes-22
	// directory and calls findData() method on each file
	public static void readInData() throws FileNotFoundException {
        File dir = new File("/Users/Mady/Desktop/DischargeNotes-22");
        File[] directoryListing = dir.listFiles(); // array is not in order
       
        if (directoryListing != null) {
        	for (File child : directoryListing) { 
			    totalCount++;
			    Scanner input = new Scanner(child);
			    Scanner console = new Scanner(System.in);
			    findData(console, input);
        	}
        }
	}
	
	// searches for potential diagnosis' by looking for the phrase "discharge diagnosis"
	// and looking at following text. Takes two Scanners as parameters. 
	public static void findData(Scanner console, Scanner input) throws FileNotFoundException {
		while(input.hasNextLine()) {
			String line = input.nextLine().toLowerCase();
			if (line.contains("discharge diagnosis") || line.contains("final diagnosis")) {
				numPatWDiag++;
				
				// finds potential diagnosis' on the same line as "discharge diagnosis"
				String[] lineSplit = line.split(":", 2);
				if (lineSplit[1].trim().length() > 0 && !lineSplit[1].contains("death") && !lineSplit[1].contains("angina")) { 
					addToMap(lineSplit[1].trim());
				}
				
				// finds potential diagnosis' on lines after the 
				// "discharge diagnosis" line
				while (input.hasNextLine() && line.trim().length() > 0) {
					line = input.nextLine().toLowerCase().trim();
					String[] newTest = line.split("\\d", -1); // line split by numbers
					for (String s : newTest) {
						String[] thirdString = s.split("\\,", -1); // line split by comma 
						for (String t : thirdString) {
							String[] fourthString = t.split("\\.", -1); // line split by period 
							for (String u : fourthString) {
								String[] fifthString = u.split("-", -1); // line split by "-"
								for (String v : fifthString) {
									addToMap(v.trim());
								}
							}
						}
					}
				}
			}
		}
	}
	
	// filters and stores all potentials diagnosis' with counts
	// takes a string of a potential diagnosis as a parameter
	public static void addToMap(String diagnosis) {
		
		// set of all common strings that are not diagnosis'
		Set<String> set = new HashSet<String>();
		set.add("");
		set.add("primary:");
		set.add("primary");
		set.add("secondary:");
		set.add("secondary");
		set.add("x");
		set.add("primary diagnosis:");
		set.add("secondary diagnosis:");
		set.add("patient");
		set.add("pt");
		set.add("outpatient");
		set.add("%");
		set.add("-");
		set.add("resolved");
		set.add("deceased");
		set.add("expired");
		set.add("death");
		set.add("multiple");
		set.add("as well as the");
		set.add("pedestrian struck by car");
		set.add("ef");
		set.add("normal  ef");
		set.add("deep");
		set.add("resistant)");
		set.add("**]");
		set.add("fall");
		set.add("mm on expiration)");
		set.add("post");
		set.add("non st");
		set.add("disease");
		set.add("status post correction with");
		set.add("multi");
		set.add("status post video");
		set.add("(ni)");
		set.add("drug");
		set.add("relative adrenal [**name");
		set.add("[**");
		set.add("**]:");
		set.add("there");
		set.add("there is no");
		set.add("transition");
		set.add("the");
		set.add("**] echo");
		set.add("/");
		set.add("left");
		set.add("a");
		set.add("c");
		set.add("%)");
		set.add("overall");
		set.add("since previous tracing");
		set.add("**]: the swan");
		set.add("assisted");
		set.add("no");
		
		// convert acronyms to full phrases and stores them for future reference
		Map<String, String> acronyms = new HashMap<String, String>();
		acronyms.put("chf", "congestive heart failure");
		acronyms.put("htn", "hypertension");
		acronyms.put("copd", "chronic obstructive pulmonary disease");
		acronyms.put("diabetes", "diabetes mellitus");
		acronyms.put("dm", "diabetes mellitus");
		acronyms.put("dm type", "diabetes mellitus");
		acronyms.put("dm type ii", "diabetes mellitus");
		acronyms.put("insulin dependent diabetes mellitus", "diabetes mellitus");
		acronyms.put("pvd", "peripheral vascular disease");
		acronyms.put("nstemi", "non st segment elevation myocardial infarction");
		acronyms.put("cad", "coronary artery disease");
		acronyms.put("aml", "acute myeloid leukemia");
		acronyms.put("uti", "urinary tract infection");
		acronyms.put("bph", "benign prostatic hyperplasia");
		acronyms.put("cri", "cri du chat syndrome");
		acronyms.put("afib", "atrial fibrillation");
		acronyms.put("afib post op", "atrial fibrillation");
		acronyms.put("vre bacteremia", "vancomycin resistant enterococci bacteremia");
		acronyms.put("dc cardioversion", "direct current cardioversion");
		acronyms.put("systolic chf", "systolic congestive heart failure");
		acronyms.put("lle dvt", "deep vein thrombosis");
		acronyms.put("nsclc", "non small cell lung cancer");
		acronyms.put("remote mi", "remote myocardial infarction");
		acronyms.put("l cea", "carotid endarterectomy");
		acronyms.put("cmv viremia", "cytomegalovirus viremia");
		acronyms.put("rv failure", "right ventricular failure");
		acronyms.put("cva", "cerebrovascular accident");
		acronyms.put("arf", "acute renal failure");
		acronyms.put("severe copd", "severe chronic obstructive pulmonary disease");
		acronyms.put("xrt", "radiation therapy");
		acronyms.put("cxr [**", "chest x-ray");
		acronyms.put("bil", "bilateral diagnostic mammogram");
		acronyms.put("gi bleeding", "gastrointestinal bleeding");
		acronyms.put("gastrointestinal bleed", "gastrointestinal bleeding");
		acronyms.put("there remains some cardiomegaly", "cardiomegaly");
		acronyms.put("mrsa pneumonia", "methicillin resistant staphylococcus aureus");
		acronyms.put("ng", "neisseria gonorrhoeae");
		
		// if diagnosis is an acronym, converts it using stored acronyms
		String newDiagnosis = diagnosis;
		if (acronyms.containsKey(diagnosis)) {
			newDiagnosis = acronyms.get(diagnosis);
		}
		
		// stores diagnosis and filters out false diagnosis' by using data in set
		if (!set.contains(newDiagnosis)) {
			totalDiag++;
			if (map.containsKey(newDiagnosis)) {
				int newValue = map.get(newDiagnosis) + 1;
				map.remove(newDiagnosis);
				map.put(newDiagnosis, newValue);
			} else {
				totalDistinctDiag++;
				map.put(newDiagnosis, 1);
			}
		}
	}
	
	// creates table from data collected and stored in addToMap() function 
	public static void createTable() throws FileNotFoundException {
		PrintWriter pw = new PrintWriter(new File("Diagnosis.csv"));
        StringBuilder sb = new StringBuilder();
        sb.append("Diagnosis");
        sb.append(',');
        sb.append("# Patients");
        sb.append('\n');
        
        for (String key : map.keySet()) {
        	sb.append(key);
        	sb.append(',');
        	sb.append(map.get(key));
        	sb.append('\n');
        }

        pw.write(sb.toString());
        pw.close();
        System.out.println("Done!");
	}
	
	// prints out relevant statistics to console
	public static void printStats() {
		System.out.println();
		System.out.println("Number of medical records: " + totalCount);
		System.out.println("Number of patients with at least one diagnosis identifed: " + numPatWDiag);
		System.out.println("Number of diagnosis': " + totalDiag);
		System.out.println("Number of distinct diagnosis': " + totalDistinctDiag);
		System.out.println("Average number of diagnosis' per patient: " + (totalDiag / numPatWDiag));
	}
}
	

