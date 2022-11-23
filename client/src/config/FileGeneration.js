import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import JSZip from "jszip";
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import '../assets/fonts/Fira_Mono/FiraMono-Regular-normal';
import '../assets/fonts/Fira_Mono/FiraMono-Bold-normal';
import '../assets/fonts/Fira_Sans/FiraSans-Regular-normal';
import '../assets/fonts/Fira_Sans/FiraSans-Bold-normal';
//import { eventNames } from "../../../models/receiptDetails";

function convertInch(inch){
	return inch*(25.4);
}

function convertPts(pts){
	return pts*(0.352778);
}

export function receipt(name, address, date, transNo, transactionItems, discount, payMethod, paidAmount, signPath , saveAs ) {
	var width = 127;
	var height = 190.5;
	
	const doc = new jsPDF({
	  orientation: "portrait",
	  unit: "mm",
	  format: [width,height]
	});
	
	
	//-----Header-----
	doc.setFont("FiraSans-Bold");
	doc.setFontSize(convertPts(14));
	doc.text("Dr. Pamela Rimorin-Concepcion", width/2, convertInch(0.5), {
		align:"center"
	});
		
	doc.setFont("FiraSans-Regular");
	doc.text("Room 211 2/F Victriashoppesville Upper Mabini St. Baguio City Philippines", width/2, convertInch(0.6), {
		align:"center"
	});

	doc.text("Non-VAT Reg. TIN: 176-738-469-009", width/2, convertInch(0.7), {
		align:"center"
	});

	doc.line(convertInch(0.5),convertInch(0.8),(127-convertInch(0.5)),convertInch(0.8));
		
		
		
	//-----Bill To (Left Side)-----
	doc.setFont("FiraMono-Regular");
	doc.text("BILL TO", convertInch(0.5), convertInch(1.0));
	
	doc.setFont("FiraMono-Bold");
	doc.text(name, convertInch(0.5), convertInch(1.1));
	
	doc.setFont("FiraMono-Regular");
	var patientAdd = doc.splitTextToSize(address, convertInch(1.8));
	doc.text(patientAdd, convertInch(0.5), convertInch(1.2));
	
	
	
	//-----Bill To (Right Side)-----
	doc.setFont("FiraMono-Bold");
	doc.text("Date Issued: ", (width-convertInch(1.6)), convertInch(1.0));
	doc.text("Transaction#: ", (width-convertInch(1.6)), convertInch(1.1));
	
	doc.setFont("FiraMono-Regular");
	doc.text(date, (width-convertInch(1.0)), convertInch(1.0));
	doc.text(transNo, (width-convertInch(1.0)), convertInch(1.1));
	
	doc.line(convertInch(0.5),convertInch(1.5),(127-convertInch(0.5)),convertInch(1.5));
	
	
	//-----Details of Charges-----
	doc.setFont("FiraMono-Bold");
	doc.text("DETAILS OF CHARGES", convertInch(0.5), convertInch(1.6));
	
	var finalArray = [];
	var totalPrice = 0;
	for(let num = 1; num<= transactionItems.length; num++){
		var serve = transactionItems[num-1].serviceValue;
		var price = transactionItems[num-1].amountToPay;
		var quantity = transactionItems[num-1].quantityValue;
		
		finalArray.push([num,serve,price,quantity,(price*quantity)]);
		totalPrice+=(price*quantity);
	}
	
	//-----Table (Maximum of 17 items)-----
	doc.autoTable({
		head: [["#","Description","Price","Quantity","Total Price"]],
		body: finalArray,
		theme: "plain",
		styles: {
			fontSize: 5,
			font: "FiraMono-Regular",
			lineWidth: 0.1
		},
		columnStyles:{
			valign: 'middle',
			0:{
				halign: 'center'
			},
			1:{
				halign: 'center'
			},
			2:{
				halign: 'center'
			},
			3:{
				halign: 'center'
			},
			4:{
				halign: 'center'
			}
		},
		headStyles:{
			valign: 'middle',
			halign: 'center'
		},
		startY: convertInch(1.7),
		startX: convertInch(0.5),
	});
	
	//-----Total----- ***Add if it is not added on Table***
	doc.setFont("FiraMono-Bold");
	doc.text("Subtotal: ", convertInch(3.3), (height-convertInch(1.7)));
	doc.text("Discount: ", convertInch(3.3), (height-convertInch(1.6)));
	doc.text("Total Amount: ", convertInch(3.3), (height-convertInch(1.5)));
	doc.setFont("FiraMono-Regular");
	doc.text(totalPrice+" pesos", convertInch(3.9), (height-convertInch(1.7)));
	doc.text(discount+"%", convertInch(3.9), (height-convertInch(1.6)));
	doc.text((totalPrice*(discount/100))+" pesos", convertInch(3.9), (height-convertInch(1.5)));
	
	
	doc.setDrawColor(0, 0, 0);
	doc.line(convertInch(0.5), (height-convertInch(1.3)),(width-convertInch(0.5)), (height-convertInch(1.3)));
	
	
	
	//-----Payment Details-----
	doc.setFont("FiraMono-Bold");
	doc.text("PAYMENT DETAILS", convertInch(0.5), (height-convertInch(1.1)));
	doc.text("Paymnent Method: ", convertInch(0.5), (height-convertInch(1.0)));
	doc.text("Amount Paid: ", convertInch(0.5), (height-convertInch(0.9)));
	doc.setFont("FiraMono-Regular");
	doc.text(payMethod, convertInch(1.3), (height-convertInch(1.0)));
	doc.text(paidAmount+" pesos", convertInch(1.3), (height-convertInch(0.9)));
	
	
	//-----DOM for Canvas-----
	var imgSign = document.createElement("img");
	var div = document.createElement("div");
	
	imgSign.src = signPath;
	div.style.position = "absolute";
	div.style.left = '100%';
	
	div.appendChild(imgSign);
	document.body.appendChild(div);
	
	//-----Functions for html2Canvas-----
	async function signCanvas(){
		return await html2canvas(imgSign);
	}
	//-----Generate PDF Function-----
	async function generate(){
		let [canvas] = await Promise.all([signCanvas()]);
		
		var imgData = canvas.toDataURL('image/png');
		doc.addImage(imgData,'PNG',(width-convertInch(1.8)),(height-convertInch(1.2)),30,15);
		
		//-----Signature-----
		doc.setFont("FiraSans-Regular");
		doc.line((width-convertInch(2.0)), (height-convertInch(0.7)),(width-convertInch(0.5)), (height-convertInch(0.7)));
		doc.text("Cashier/Authorized Representative",((width-convertInch(1.75))), (height-convertInch(0.6)));
		
		
		
		//-----Footer Notes-----
		doc.text('"THIS DOCUMENTS IS NOT VALID FOR CLAIMING INPUT TAXES"'
		, (width-convertInch(0.5)), (height-convertInch(0.3)),
		{
			align:"right"
		});
		doc.text("THIS OFFICIAL RECEIPT SHALL BE VALID FOR FIVE (5) YEARS FROM THE DATE OF ATP"
		, (width-convertInch(0.5)), (height-convertInch(0.2)),
		{
			align:"right"
		});
		
		
		//save document
		if(saveAs=="download"){
			doc.save("Receipt_"+name+"_"+date+".pdf");
		}else if(saveAs=="print"){
			doc.autoPrint();
			var blob = doc.output("blob");
			window.open(URL.createObjectURL(blob));
		}else if(saveAs=="zip"){
			return doc;
		}
		div.remove();
	}
	return generate();
}

export function prescription(date, name, age, medArray, ptr, license, backPath, signPath, saveAs){
	const width = 95.3;
	const height = 127;
	
	
	const doc = new jsPDF({
	  orientation: "portrait",
	  unit: "mm",
	  format: [width,height]
	});
	
	async function download(){
		for(let page = 0; page<(parseInt(medArray.length/3)+(medArray.length%3>0?1:0)); page++){
			
			if(page>0){
				doc.addPage([width,height],"portrait");
			}
		
			//-----DOM for Canvas-----
			var imgBack = document.createElement("img");
			var imgSign = document.createElement("img");
			var div = document.createElement("div");
			
			imgBack.src = backPath;
			imgSign.src = signPath;
			div.style.position = "absolute";
			div.style.left = '100%';
			
			div.appendChild(imgBack);
			div.appendChild(imgSign);
			document.body.appendChild(div);
			
			
			//-----Functions for html2Canvas-----
			async function backCanvas(){
				return await html2canvas(imgBack);
			}
			
			async function signCanvas(){
				return await html2canvas(imgSign);
			}
			
			
			//-----Generate PDF Function-----
			async function generate(){
				let [canvas, canvas2] = await Promise.all([backCanvas(), signCanvas()]);
				
				var imgData = canvas.toDataURL('image/png');
				doc.addImage(imgData,'PNG',0,0,width,height);
				
				//-----Header-----
				doc.setFont("FiraSans-Bold");
				doc.setFontSize(convertPts(21));
				doc.text("Dr. Pamela Rimorin-Concepcion", width/2, convertInch(0.2), {
					align:"center"
				});
				doc.setFontSize(convertPts(14));
				doc.setFont("FiraSans-Regular");
				doc.text("Dentist / General Orthodontics", width/2, convertInch(0.3), {
					align:"center"
				});
				var headerAdd = doc.splitTextToSize("Room 211 2/F Victriashoppesville Upper Mabini St. Baguio City Philippines", convertInch(1.6));
				doc.text(headerAdd,  width/2, convertInch(0.4), {
					align:"center"
				});
				doc.text("Contact No.: 0912 367 1234", width/2, convertInch(0.6), {
					align:"center"
				});
				doc.line(convertInch(0.5),convertInch(0.7),(width-convertInch(0.5)),convertInch(0.7));


				//-----Prescription Information-----
				doc.setFont("FiraMono-Bold");
				doc.text("Date: "+date, (width-convertInch(0.5)), convertInch(0.8),{
					align:"right"
				});

				doc.text("Patient: "+name, convertInch(0.5), convertInch(0.95));
				doc.text("Age: "+age+" years old", convertInch(0.5), convertInch(1.025));


				//-----RX symbol-----
				doc.setFont("FiraSans-Bold");
				doc.setFontSize(convertPts(36));
				doc.text("Rx", convertInch(0.5), convertInch(1.25));



				//-----Prescription Item-----
				doc.setFont("FiraMono-Regular");
				doc.setFontSize(convertPts(14));
				
				for(let num = 0; num< (page==(parseInt(medArray.length/3)+(medArray.length%3>0?0:-1))?(medArray.length%3):3); num++){
					doc.setFont("FiraSans-Bold");
					doc.setFontSize(convertPts(13));
					doc.text(medArray[num+(page*3)][0], convertInch(0.5), convertInch(1.4+0.075+(num*0.5)));
					doc.setFont("FiraMono-Regular");
					doc.setFontSize(convertPts(14));
					doc.text(medArray[num+(page*3)][1], convertInch(0.5), convertInch(1.4+0.15+(num*0.5)));
					doc.text(medArray[num+(page*3)][2], convertInch(.65), convertInch(1.4+0.225+(num*0.5)));
					doc.text(medArray[num+(page*3)][3], convertInch(0.65), convertInch(1.4+0.30+(num*0.5)));
					doc.text(medArray[num+(page*3)][4], convertInch(0.5), convertInch(1.4+0.375+(num*0.5)));
					doc.text(medArray[num+(page*3)][5], convertInch(0.8), convertInch(1.4+0.45+(num*0.5)));
				}


				//-----Signature-----
				doc.setFont("FiraSans-Regular");
				doc.setFontSize(convertPts(17));
				doc.line((width/2), (height-convertInch(1.5)),(width-convertInch(0.5)), (height-convertInch(1.5)));
				doc.text("Dr. Pamela Rimorin Concepcion",(width-convertInch(1.75)), (height-convertInch(1.4)));
				doc.text("PTR No.:",(width-convertInch(1.75)), (height-convertInch(1.25)));
				doc.text("License No.:",(width-convertInch(1.75)), (height-convertInch(1.1)));
				doc.text(ptr,(width-convertInch(1.4)), (height-convertInch(1.25)));
				doc.text(license,(width-convertInch(1.2)), (height-convertInch(1.1)));

				var imgData2 = canvas2.toDataURL('image/png');
				doc.addImage(imgData2,'PNG',(width-convertInch(1.70)), (height-convertInch(2.0)),25,12);



				//-----End of Prescription-----
				doc.text("(End of Prescription)",width/2, (height-convertInch(0.5)),
				{
					align:"center"
				});
				div.remove();
			}
			await Promise.all([generate()]);
		}

		if(saveAs=="download"){
			doc.save("Prescription_"+name+"_"+date+".pdf");
		}else if(saveAs=="print"){
			doc.autoPrint();
			var blob = doc.output("blob");
			window.open(URL.createObjectURL(blob));
		}else if(saveAs=="zip"){
			return doc;
		}
	}
	return download();
}

export function dentalRecords(name, bd, doct, med, cond, alle, prec, treatData, saveAs){
	const width = convertInch(8.5);
	const height = convertInch(14);
	
	const doc = new jsPDF({
	  orientation: "portrait",
	  unit: "mm",
	  format: [width,height]
	});
	
	//-----Header-----
	doc.setFont("FiraSans-Bold");
	doc.setFontSize(convertPts(21));
	doc.text("Dr. Pamela Rimorin-Concepcion", width/2, convertInch(0.5), {
		align:"center"
	});
	
	doc.setFontSize(convertPts(14));
	doc.setFont("FiraSans-Regular");
	doc.text("Dentist / General Orthodontics", width/2, convertInch(0.6), {
		align:"center"
	});
	
	var headerAdd = doc.splitTextToSize("Room 211 2/F Victriashoppesville Upper Mabini St. Baguio City Philippines", convertInch(1.6));
	doc.text(headerAdd,  width/2, convertInch(0.7), {
		align:"center"
	});

	doc.text("Contact No.: 0912 367 1234", width/2, convertInch(0.9), {
		align:"center"
	});

	doc.line(convertInch(0.5),convertInch(1.0),(width-convertInch(0.5)),convertInch(1.0));
	
	
	//-----Patient Information-----
	doc.setFont("FiraMono-Bold");
	doc.setFontSize(convertPts(19));
	doc.setTextColor(93, 94, 238);
	doc.text("Patient Information", convertInch(0.5), convertInch(1.3));
	
	doc.setFontSize(convertPts(14));
	doc.setTextColor(163, 167, 171);
	doc.text("Patient Name", convertInch(0.5), convertInch(1.5));
	doc.text("Birthdate", convertInch(0.5), convertInch(1.7));
	doc.text("Treating Doctor", convertInch(0.5), convertInch(1.9));
	
	doc.setFont("FiraMono-Regular");
	doc.setTextColor(0);
	doc.text(name, convertInch(1.5), convertInch(1.5));
	doc.text(bd, convertInch(1.5), convertInch(1.7));
	doc.text(doct, convertInch(1.5), convertInch(1.9));
	
	doc.setFontSize(convertPts(15));
	doc.text("Medical Conditions", convertInch(0.5), convertInch(2.2));
	
	doc.setFontSize(convertPts(14));
	doc.setFont("FiraMono-Bold");
	doc.setTextColor(163, 167, 171);
	doc.text("Medications/ Maintenance", convertInch(0.5), convertInch(2.4));
	doc.text("Conditions", convertInch(2.375), convertInch(2.4));
	doc.text("Allergies", convertInch(4.25), convertInch(2.4));
	doc.text("Precautions", convertInch(6.125), convertInch(2.4));
	
	doc.setFont("FiraMono-Regular");
	doc.setTextColor(0);
	doc.text(med, convertInch(0.5), convertInch(2.6));
	doc.text(cond, convertInch(2.375), convertInch(2.6));
	doc.text(alle, convertInch(4.25), convertInch(2.6));
	doc.text(prec, convertInch(6.125), convertInch(2.6));
	
	doc.line(convertInch(0.5),convertInch(2.8),(width-convertInch(0.5)),convertInch(2.8));
	
	
	
	//-----Treatments-----
	doc.setFont("FiraMono-Bold");
	doc.setFontSize(convertPts(19));
	doc.setTextColor(93, 94, 238);
	doc.text("Treatments", convertInch(0.5), convertInch(3.0));
	doc.setTextColor(0);
	doc.autoTable({
		head: [["Date","Tooth No.","Treatment Description","Procedure/s"]],
		body: treatData,
		theme: "plain",
		styles: {
			fontSize: 5,
			font: "FiraMono-Regular",
			lineWidth: 0.1
		},
		columnStyles:{
			valign: 'middle',
			0:{
				font: "FiraMono-Bold",
				halign: 'center'
			},
			1:{
				halign: 'center'
			},
			2:{
				halign: 'center'
			},
			3:{
				halign: 'center'
			}
		},
		alternateRowStyles:{
			fillColor: [240, 240, 240]
		},
		headStyles:{
			valign: 'middle',
			halign: 'center',
			font: "FiraMono-Bold"
		},
		startY: convertInch(3.2),
		startX: convertInch(0.5),
	});

	if(saveAs=="download"){
		doc.save("Dental-Records_"+name+".pdf");
	}else if(saveAs=="print"){
		doc.autoPrint();
		var blob = doc.output("blob");
		window.open(URL.createObjectURL(blob));
	}else if(saveAs=="zip"){
		return doc;
	}
}

export function compiledDentalRecord(name, bd, doct, med, cond, alle, prec, DentRecID, treatData, saveAs){
	const width = convertInch(8.5);
	const height = convertInch(14);
	
	const doc = new jsPDF({
	  orientation: "portrait",
	  unit: "mm",
	  format: [width,height]
	});
	
	//-----Header-----
	doc.setFont("FiraSans-Bold");
	doc.setFontSize(convertPts(21));
	doc.text("Dr. Pamela Rimorin-Concepcion", width/2, convertInch(0.5), {
		align:"center"
	});
	
	doc.setFontSize(convertPts(14));
	doc.setFont("FiraSans-Regular");
	doc.text("Dentist / General Orthodontics", width/2, convertInch(0.6), {
		align:"center"
	});
	
	var headerAdd = doc.splitTextToSize("Room 211 2/F Victriashoppesville Upper Mabini St. Baguio City Philippines", convertInch(1.6));
	doc.text(headerAdd,  width/2, convertInch(0.7), {
		align:"center"
	});

	doc.text("Contact No.: 0912 367 1234", width/2, convertInch(0.9), {
		align:"center"
	});

	doc.line(convertInch(0.5),convertInch(1.0),(width-convertInch(0.5)),convertInch(1.0));
	
	
	//-----Patient Information-----
	doc.setFont("FiraMono-Bold");
	doc.setFontSize(convertPts(19));
	doc.setTextColor(93, 94, 238);
	doc.text("Patient Information", convertInch(0.5), convertInch(1.3));
	
	doc.setFontSize(convertPts(14));
	doc.setTextColor(163, 167, 171);
	doc.text("Patient Name", convertInch(0.5), convertInch(1.5));
	doc.text("Birthdate", convertInch(0.5), convertInch(1.7));
	doc.text("Treating Doctor", convertInch(0.5), convertInch(1.9));
	
	doc.setFont("FiraMono-Regular");
	doc.setTextColor(0);
	doc.text(name, convertInch(1.5), convertInch(1.5));
	doc.text(bd, convertInch(1.5), convertInch(1.7));
	doc.text(doct, convertInch(1.5), convertInch(1.9));
	
	doc.setFontSize(convertPts(15));
	doc.text("Medical Conditions", convertInch(0.5), convertInch(2.2));
	
	doc.setFontSize(convertPts(14));
	doc.setFont("FiraMono-Bold");
	doc.setTextColor(163, 167, 171);
	doc.text("Medications/ Maintenance", convertInch(0.5), convertInch(2.4));
	doc.text("Conditions", convertInch(2.375), convertInch(2.4));
	doc.text("Allergies", convertInch(4.25), convertInch(2.4));
	doc.text("Precautions", convertInch(6.125), convertInch(2.4));
	
	doc.setFont("FiraMono-Regular");
	doc.setTextColor(0);
	doc.text(med, convertInch(0.5), convertInch(2.6));
	doc.text(cond, convertInch(2.375), convertInch(2.6));
	doc.text(alle, convertInch(4.25), convertInch(2.6));
	doc.text(prec, convertInch(6.125), convertInch(2.6));
	
	doc.line(convertInch(0.5),convertInch(2.8),(width-convertInch(0.5)),convertInch(2.8));
	
	async function dentRecCanvas(DentRecID){
		return await html2canvas(DentRecID);
	}
	
	async function generate(){
		let [canvas] = await Promise.all([dentRecCanvas(DentRecID)]);
		
		var imgData = canvas.toDataURL('image/png');
		doc.addImage(imgData,'PNG',convertInch(0.5),convertInch(3.0),(width-convertInch(1.0)),(canvas.height/canvas.width)*(width-convertInch(1.0)));

		doc.line(convertInch(0.5),convertInch(6.35),(width-convertInch(0.5)),convertInch(6.35));

		//-----Treatments-----
		doc.setFont("FiraMono-Bold");
		doc.setFontSize(convertPts(19));
		doc.setTextColor(93, 94, 238);
		doc.text("Treatments", convertInch(0.5), convertInch(6.5));
		doc.setTextColor(0);
		doc.autoTable({
			head: [["Date","Tooth No.","Treatment Description","Procedure/s"]],
			body: treatData,
			theme: "plain",
			styles: {
				fontSize: 5,
				font: "FiraMono-Regular",
				lineWidth: 0.1
			},
			columnStyles:{
				valign: 'middle',
				0:{
					font: "FiraMono-Bold",
					halign: 'center'
				},
				1:{
					halign: 'center'
				},
				2:{
					halign: 'center'
				},
				3:{
					halign: 'center'
				}
			},
			alternateRowStyles:{
				fillColor: [240, 240, 240]
			},
			headStyles:{
				valign: 'middle',
				halign: 'center',
				font: "FiraMono-Bold"
			},
			startY: convertInch(6.65),
			startX: convertInch(0.5),
		});

		if(saveAs=="download"){
			doc.save("Dental-Record_"+name+".pdf");
		}else if(saveAs=="print"){
			doc.autoPrint();
			var blob = doc.output("blob");
			window.open(URL.createObjectURL(blob));
		}else if(saveAs=="zip"){
			return doc;
		}

	}
	generate();
}

export function dentalRecord(name, bd, doct, med, cond, alle, prec, DentRecID, saveAs){
	const width = convertInch(8.5);
	const height = convertInch(14);
	
	const doc = new jsPDF({
	  orientation: "portrait",
	  unit: "mm",
	  format: [width,height]
	});
	
	//-----Header-----
	doc.setFont("FiraSans-Bold");
	doc.setFontSize(convertPts(21));
	doc.text("Dr. Pamela Rimorin-Concepcion", width/2, convertInch(0.5), {
		align:"center"
	});
	
	doc.setFontSize(convertPts(14));
	doc.setFont("FiraSans-Regular");
	doc.text("Dentist / General Orthodontics", width/2, convertInch(0.6), {
		align:"center"
	});
	
	var headerAdd = doc.splitTextToSize("Room 211 2/F Victriashoppesville Upper Mabini St. Baguio City Philippines", convertInch(1.6));
	doc.text(headerAdd,  width/2, convertInch(0.7), {
		align:"center"
	});

	doc.text("Contact No.: 0912 367 1234", width/2, convertInch(0.9), {
		align:"center"
	});

	doc.line(convertInch(0.5),convertInch(1.0),(width-convertInch(0.5)),convertInch(1.0));
	
	
	//-----Patient Information-----
	doc.setFont("FiraMono-Bold");
	doc.setFontSize(convertPts(19));
	doc.setTextColor(93, 94, 238);
	doc.text("Patient Information", convertInch(0.5), convertInch(1.3));
	
	doc.setFontSize(convertPts(14));
	doc.setTextColor(163, 167, 171);
	doc.text("Patient Name", convertInch(0.5), convertInch(1.5));
	doc.text("Birthdate", convertInch(0.5), convertInch(1.7));
	doc.text("Treating Doctor", convertInch(0.5), convertInch(1.9));
	
	doc.setFont("FiraMono-Regular");
	doc.setTextColor(0);
	doc.text(name, convertInch(1.5), convertInch(1.5));
	doc.text(bd, convertInch(1.5), convertInch(1.7));
	doc.text(doct, convertInch(1.5), convertInch(1.9));
	
	doc.setFontSize(convertPts(15));
	doc.text("Medical Conditions", convertInch(0.5), convertInch(2.2));
	
	doc.setFontSize(convertPts(14));
	doc.setFont("FiraMono-Bold");
	doc.setTextColor(163, 167, 171);
	doc.text("Medications/ Maintenance", convertInch(0.5), convertInch(2.4));
	doc.text("Conditions", convertInch(2.375), convertInch(2.4));
	doc.text("Allergies", convertInch(4.25), convertInch(2.4));
	doc.text("Precautions", convertInch(6.125), convertInch(2.4));
	
	doc.setFont("FiraMono-Regular");
	doc.setTextColor(0);
	doc.text(med, convertInch(0.5), convertInch(2.6));
	doc.text(cond, convertInch(2.375), convertInch(2.6));
	doc.text(alle, convertInch(4.25), convertInch(2.6));
	doc.text(prec, convertInch(6.125), convertInch(2.6));
	
	doc.line(convertInch(0.5),convertInch(2.8),(width-convertInch(0.5)),convertInch(2.8));
	
	async function dentRecCanvas(DentRecID){
		return await html2canvas(DentRecID);
	}
	
	async function generate(){
		let [canvas] = await Promise.all([dentRecCanvas(DentRecID)]);
		
		var imgData = canvas.toDataURL('image/png');
		doc.addImage(imgData,'PNG',convertInch(0.5),convertInch(3.0),(width-convertInch(1.0)),(canvas.height/canvas.width)*(width-convertInch(1.0)));

		if(saveAs=="download"){
			doc.save("Dental-Record_"+name+".pdf");
		}else if(saveAs=="print"){
			doc.autoPrint();
			var blob = doc.output("blob");
			window.open(URL.createObjectURL(blob));
		}else if(saveAs=="zip"){
			return doc;
		}

	}
	generate();
}

//prescription(date, name, age, medArray, ptr, license, backPath, signPath, saveAs)
async function zipPrescription(prescriptions){
	var zip = new JSZip();

	prescriptions.forEach (async function (item, idx, array) {
		prescription(
			item.presDate, 
			item.fname+" "+item.lname, 
			item.age, 
			fixArrayTable(item.presDetails), 
			"1953834", 
			"2719432", 
			require('../assets/img/watermark_for_eprescription.png'), 
			require('../assets/img/tempsignaturedentist.png'), 
			"zip"
		).then(prescription=>{
			try{
				zip.file("EPrescription"+(idx+1)+"_"+item.fname+" "+item.lname+"_"+item.presdate+".pdf", prescription.output('blob'));
			}catch(e){
				console.error(e);
			}
		}).then(()=>{
			if (idx === array.length - 1){
				zip.generateAsync({type:'blob'}).then(function(content) {
					saveAs(content, item.fname+" "+item.lname+'_EPrescriptions.zip');
				})
			}
		})
	})
}

async function zipTransaction(transaction){
	var zip = new JSZip();
	
	//receipt(name, address, date, transNo, transactionItems, discount, payMethod, paidAmount, signPath , saveAs )
	transaction.forEach(async function (info, idx, array) {
		receipt(
			info.fname+" "+info.lname,
			info.house+" "+info.brgy+" "+info.municipality+" "+info.province+" "+info.country, 
			info.date, 
			info.appNum, 
			info.addedItem, 
			(info.discountValue*100), 
			info.paymentType, 
			info.amountPaid, 
			require('../assets/img/tempsignaturesec.png'),
			//require("../../../uploads/e-receipt/"+info.patientIDnumber+"_"+info.date+".png"), 
			"zip"
		).then(receipt=>{
			try{
				zip.file("Transaction"+(idx+1)+"_"+info.fname+" "+info.lname+"_"+info.date+".pdf", receipt.output('blob'));
			}catch(e){
				console.error(e);
			}
		}).then(()=>{
			if (idx === array.length - 1){
				zip.generateAsync({type:'blob'}).then(function(content) {
					saveAs(content,info.fname+" "+info.lname+'_Transactions.zip');
				})
			}
		})
	})
}

function compileDentalRecords(dental){
	//compiledDentalRecord(name, bd, doct, med, cond, alle, prec, DentRecID, treatData, saveAs)
	var doc = compiledDentalRecord(
		dental.fname+" "+dental.lname,
		dental.bday,
		"Dr. Pamela R. Concepcion",
		dental.medications,
		dental.conditions,
		dental.allergies,
		dental.hasOwnProperty("precaution") ? dental.precaution: "N/A",
		document.getElementById("dental-chart-Image"), 
		dental.treatData,
		"download"
	)
}

export function zipAll(dentals, transactions, prescriptions){
	compileDentalRecords(dentals);
	zipTransaction(transactions);
	zipPrescription(prescriptions);
}

function fixArrayTable(arr){
	var newArr = [];
	for(let arrOut = 0 ; arrOut<arr.length ; arrOut++){
	  newArr.push([
		arr[arrOut].generic,
		arr[arrOut].brand,
		arr[arrOut].dosage,
		arr[arrOut].duration,
		arr[arrOut].form,
		arr[arrOut].frequency
	  ])
	}
	return newArr;
}