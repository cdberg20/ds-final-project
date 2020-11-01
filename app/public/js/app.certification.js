var app = new Vue({
  el: '#certificationsApp',
//initialize
  data: {
    certList: [{
      certID:'',
      agency:'',
  	  name:'',
  	  expiration_time:''
    }]
  },

  methods: {

    fetchCert(){
      fetch('api/certifications/index.php')
      .then(response => response.json())
      .then(json => {
        this.certList=json;

        console.log(this.certList);
      });
    }


  },
    created() {
      this.fetchCert();
    },
})
