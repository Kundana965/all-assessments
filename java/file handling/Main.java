package fsd;
import java.io.*;
public class Main {
	public static void main(String[] args) {
		try {
			File f=new File("C:\\Users\\Administrator\\Desktop\\Typescript\\files");
			FileWriter fw=new FileWriter(f);
			BufferedWriter bw=new BufferedWriter(fw);
			
			bw.write("this is written from spring tools");
			
			bw.close();
		}
		catch(IOException e)
		{
			e.printStackTrace();
		}

	}

}
