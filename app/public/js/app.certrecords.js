var app = new Vue({
  el: '#displayCertRecordsApp',
//initialize
  data: {
    certRecordList: [{
      cert_recordID: '',
      memberID: '',
      certID:'',
  	  expiration:'',
      first_name:'',
      last_name:''
    }],
    currentDate:''
  },

  methods: {


    fetchCertRecords(){
      fetch('api/certrecords/memberindex.php')
      .then(response => response.json())
      .then(json => {
        this.certRecordList=json;

        console.log(this.certRecordList);
      });
    },

    date_function(){
      var currentDate = new Date();
      var dd = String(currentDate.getDate()).padStart(2, '0');
      var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = currentDate.getFullYear();

      currentDate = yyyy + '-' + mm + '-' + dd;
      // currentDate = currentDate.toJSON(); 
      console.log(currentDate);

      }


  },
    created() {
      this.fetchCertRecords();
      this.date_function();
    },
})
