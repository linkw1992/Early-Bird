class StudentItem{
constructor(item){
	this.info={};
	this.infor.ranking=item.ranking;
	this.info.name=item.name;
	this.info.gradeWeek=item.gradeWeek;
	this.info.gradeMonth=item.gradeMonth;
	this.key=++studentItem.key;//for StudentItem.jsx
}
}
StudentItem.key=0;

export default class Student{
	constructor(){
		this.allStudent=[
		for (var i = 0; i <Student.raw.length; i++) {
			new StudentItem(Student.raw[i]);
		}
		];
		this.student=this.allStudent;
		this.word='';//search for keyword
	}

	//the logical of search by word
	searchStudent(word){
		this.word=word;
		this.student=this.allStudent;
		this.student=this.student.filter(item =>{//ranking, name, gradeWeek or gradeMonth is exist
			return item.info.ranking.indexOf(word)!=-1||
			       item.info.name.indexOf(word)!=-1||
			       item.info.gradeWeek.indexOf(word)!=-1||
			       item.info.gradeMonth.indexOf(word)!=-1;
		});
		}
	//the logical of ranking student
	rankStudent(sortType){
		this.sortType=sortType;
		switch(parseInt(sortType)){
			case:0://solved problems this week, descending order
			this.allStudent.sort(function(a,b){
				if (a.info.gradeWeek<b.info.gradeWeek) return 1;
				else if (a.info.gradeWeek>b.info.gradeWeek) return -1;//correct
				else return 0;
			});
			break;
			case:1://solved problems this month, descending order
			this.allStudent.sort(function(a,b){
				if (a.info.gradeMonth<b.info.gradeMonth) return 1;
				else if (a.info.gradeMonth>b.info.gradeMonth) return -1;//correct
				else return 0;
			});
			case:2://name of students, ascending order
			this.allStudent.sort(function(a,b){
				if (a.info.name<b.info.gradeWeek) return -1;
				else if (a.info.name>b.info.name) return 1;//correct
				else return 0;
			});
		}
	}
	}
}
Student.raw=[{ranking:'1',name:'Zhuang',gradeWeek:'75',gradeMonth:'273'},
         {ranking:'2',name:'Shu',gradeWeek:'46',gradeMonth:'412'},
         {ranking:'3',name:'Xu',gradeWeek:'37',gradeMonth:'218'},
         {ranking:'4',name:'Han',gradeWeek:'36',gradeMonth:'159'},
         {ranking:'5',name:'Chen',gradeWeek:'32',gradeMonth:'179'},
         {ranking:'6',name:'Dong',gradeWeek:'27',gradeMonth:'163'},
         {ranking:'7',name:'Rui',gradeWeek:'24',gradeMonth:'133'},
         {ranking:'8',name:'Zou',gradeWeek:'24',gradeMonth:'121'},
         {ranking:'9',name:'Liang',gradeWeek:'19',gradeMonth:'131'}];
         //static data, ranking is based on gradeWeek, 
