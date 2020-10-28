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
      last_name:'',
      name:''
    }],
    currentDate:'',
    expiration_date:''
  },

  methods: {
    isExpired(dt) {
       return dt < moment().format('YYYY-MM-DD');
    },

    fetchCertRecords(){
      fetch('api/certrecords/memberindex.php')
      .then(response => response.json())
      .then(json => {
        this.certRecordList=json;
        console.log(this.certRecordList);
        // this.date_function();
        console.log(typeof this.expiration);
      });
      // var expiration_date = new Date();
      //
      // expiration_date = Date.parse(this.expiration);
      // console.log(expiration_date);
    },

    // date_function(){
    //   var currentDate = new Date();
    //   var dd = String(currentDate.getDate()).padStart(2, '0');
    //   var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    //   var yyyy = currentDate.getFullYear();
    //
    //   currentDate = yyyy + '-' + mm + '-' + dd;
    //   console.log(currentDate);
    //   console.log(typeof currentDate);
    //
    //   }


  },
    created() {
      this.fetchCertRecords();

    },
})
