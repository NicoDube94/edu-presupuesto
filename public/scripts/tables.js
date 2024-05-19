let table=new DataTable('#myTable',{
  layuot:{
    topStart:"pageLength",
    topEnd:"search",
    bottomStart:{
      info:{
        search:'- filtrado de _MAX_ records'
      }
    },
    bottomEnd:"paging",
  },
  language:{
    info:'Mostrando pagina _START_ a _END_ de _TOTAL_',
  }
});
