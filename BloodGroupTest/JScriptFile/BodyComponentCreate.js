function show(){
	var x = document.getElementById("DistrictSelect").value;
	document.getElementById("sp2").innerHTML= x;
	
}
function ShowSearchButton(){
	document.getElementById("Showbtn").innerHTML= "<input type='submit' name='Search' id='Search' value='Search' onclick='show()' class='SearchButton'>";
}