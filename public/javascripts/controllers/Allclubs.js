var app=angular.module('Allclubs',[]);
app.factory("All_clubs",[function(){
var o={
	Society:"Technical Society,ECB",
	descriptions:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
	proident, sunt in culpa qui officia deserunt mollit anim id es laborum.",
	clubs:["Robotics","tech club","Electro Parichaya"],
	img:"t.jpg",
	inforamtions:"Here is some more information about this product that is only revealed once clicked on.",
    club_images:"robot.jpg,t.jpg,image.jpg",	
};
return o;
}]);
app.controller('Allclubs',['$scope','All_clubs',function($scope,All_clubs){
	$scope.firstname=All_clubs.Society;
	$scope.des=All_clubs.descriptions;
	$scope.club=All_clubs.clubs;
	$scope.image=All_clubs.img;
	$scope.information=All_clubs.inforamtions;
	$scope.club_imag=All_clubs.club_images;
}]);