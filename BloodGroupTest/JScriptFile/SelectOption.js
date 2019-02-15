//**************
function SelectDistrict(){
	var x = document.getElementById('select1').value;
	if(x ==="Andhra Pradesh"){
		document.getElementById('DistrictShow').innerHTML = " <br><label class='SelectDistrictLabel'>Select District</label><select id='DistrictSelect' class ='SelectDistrict' onchange='ShowSearchButton()'><option value='NON'>no selected</option><option value='Anantapur'> Anantapur</option><option value='Chittoor'> Chittoor</option><option value='East Godavari'>East Godavari</option><option value='Guntur'>Guntur</option><option value='Kadapa'>Kadapa</option><option value='Krishna'>Krishna</option><option value='Kurnool'>Kurnool</option><option value='Sri Potti Sri Ramulu Nellore'>Sri Potti Sri Ramulu Nellore</option><option value='Prakasam'>Prakasam</option><option value='Srikakulam'>Srikakulam</option><option value='Visakhapatnam'>Visakhapatnam</option><option value='Vizianagaram'>Vizianagaram</option><option value='West Godavari'>West Godavari</option></select>";
	}
	else if(x === "Arunachal Pradesh"){
		document.getElementById('DistrictShow').innerHTML = "Arunachal Pradesh";
	}
	else if(x === "Assam"){
		document.getElementById('DistrictShow').innerHTML = "Assam";
	}
	else if(x === "Bihar"){
		document.getElementById('DistrictShow').innerHTML = "Bihar";
	}
	else if(x === "Chhattisgarh"){
		document.getElementById('DistrictShow').innerHTML = "Chhattisgarh";
	}
	else if(x === "Goa"){
		document.getElementById('DistrictShow').innerHTML = "Goa";
	}
	else if(x === "Gujarat"){
		document.getElementById('DistrictShow').innerHTML = "Gujarat";
	}
	else if(x === "Jaryana"){
		document.getElementById('DistrictShow').innerHTML = "Jaryana";
	}
	else if(x === "Himachal Pradesh"){
		document.getElementById('DistrictShow').innerHTML = "Himachal Pradesh";
	}
	else if(x === "Jammu and Kashmir"){
		document.getElementById('DistrictShow').innerHTML = "Jammu and Kashmir";
	}
	else if(x === "Jharkand"){
		document.getElementById('DistrictShow').innerHTML = "Jharkand";
	}
	else if(x === "Karnataka"){
		document.getElementById('DistrictShow').innerHTML = "Karnataka";
	}
	else if(x === "Kerala"){
		document.getElementById('DistrictShow').innerHTML = "Kerala";
	}
	else if(x === "Madhya Pradesh"){
		document.getElementById('DistrictShow').innerHTML = "Madhya Pradesh";
	}
	else if(x === "Maharashtra"){
		document.getElementById('DistrictShow').innerHTML = "Maharashtra";
	}
	else if(x === "Manipur"){
		document.getElementById('DistrictShow').innerHTML = "Manipur";
	}
	else if(x === "Meghalaya"){
		document.getElementById('DistrictShow').innerHTML = "Meghalaya";
	}
	else if(x === "Mizoram"){
		document.getElementById('DistrictShow').innerHTML = "Mizoram";
	}
	else if(x === "Nagaland"){
		document.getElementById('DistrictShow').innerHTML = "Nagaland";
	}
	else if(x === "Odisha"){
		document.getElementById('DistrictShow').innerHTML = "Odisha";
	}
	else if(x === "Punjab"){
		document.getElementById('DistrictShow').innerHTML = "Punjab";
	}
	else if(x === "Rajasthan"){
		document.getElementById('DistrictShow').innerHTML = "Rajasthan";
	}
	else if(x === "Sikkim"){
		document.getElementById('DistrictShow').innerHTML = "Sikkim";
	}
	else if(x === "Tamil Nadu"){
		document.getElementById('DistrictShow').innerHTML = "Tamil Nadu";
	}
	else if(x === "Telangana"){
		document.getElementById('DistrictShow').innerHTML = "Telangana";
	}
	else if(x === "Tripura"){
		document.getElementById('DistrictShow').innerHTML = "Tripura";
	}
	else if(x === "Uttar Pradesh"){
		document.getElementById('DistrictShow').innerHTML = "Uttar Pradesh";
	}
	else if(x === "Uttarakhand"){
		document.getElementById('DistrictShow').innerHTML = "Uttarakhand";
	}
	else if(x === "West Bangal"){
		document.getElementById('DistrictShow').innerHTML = "West Bangal";
	}
	else{
		document.getElementById('DistrictShow').innerHTML = "";
	}
	
}