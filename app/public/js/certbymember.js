var app = new Vue({
  el: '#displayByMemberApp',
//initialize
  data: {
    memberList:[{
      memberID: '',
      first_name:'',
      last_name:'',
    }],
    indexList: [{
      cert_recordID: '',
      memberID: '',
      certID:'',
  	  expiration:'',
      name:''
    }],
    currentDate:'',
    expiration_date:'',
    selectedCertRecord: null,
    selectedCertRecordID: null,
    selectedMemberID: null,
    selectedMember: null
  },

  methods: {
    isExpired(dt) {
       return dt < moment().format('YYYY-MM-DD');
    },
    fetchMember(){
      fetch('api/members/index.php')
      .then(response => response.json())
      .then(json => {
        this.memberList=json;

        console.log(this.memberList);
      });
    },
    fetchCertRecords(){
      fetch('api/certrecords/memberindex.php')
      .then(response => response.json())
      .then(json => {
        this.indexList=json;
        console.log(this.indexList);
        // this.date_function();

      });
      // var expiration_date = new Date();
      //
      // expiration_date = Date.parse(this.expiration);
      // console.log(expiration_date);
    },

    selectCertRecord(){
      fetch('api/certrecords/memberindex.php')
     .then(response => response.json() )
     .then(json => {
       console.log("Returned from post:", json);
       this.selectedCertRecord = this.editMemberData();
     });
     console.log(this.selectedCertRecord);
  },


  },
    created() {
      this.fetchCertRecords();
      this.fetchMember();

    },
})
