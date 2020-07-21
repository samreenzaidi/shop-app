jQuery(document).ready(function () {
  addColumns();
});


var json=[
    {
        "image":"./images/image1.jfif",
        "caption":"Barbeque Nation",
        "city": "Mumbai, Pune, Delhi, Gurgaon",
        "offer": "Upto 50% off"
    },
    {
        "image":"./images/image2.jfif",
        "caption":"Fassos",
        "city": "Mumbai, Pune, Delhi, Gurgaon",
        "offer": "Upto 20% off"
    },
    {
        "image":"./images/image3.jfif",
        "caption":"Firangi Bake",
        "city": "Mumbai, Pune, Delhi, Gurgaon",
        "offer": "Upto 50% off"
    },
    {
        "image":"./images/image4.jfif",
        "caption":"Good Bowl",
        "city": "Mumbai, Pune, Delhi, Gurgaon",
        "offer": "Upto 70% off"
    },
    {
        "image":"./images/image5.jfif",
        "caption":"Mandarin Oak",
        "city": "Mumbai, Pune, Delhi, Gurgaon",
        "offer": "Upto 80% off"
    },
    {
        "image":"./images/image6.jfif",
        "caption":"Sweet Truth",
        "city": "Mumbai, Pune, Delhi, Gurgaon",
        "offer": "Upto 30% off"
    },
    {
        "image":"./images/image7.jfif",
        "caption":"Bakingo",
        "city": "Mumbai, Pune, Delhi, Gurgaon",
        "offer": "Upto 30% off"
    },
    {
        "image":"./images/image8.jfif",
        "caption":"Bakingo",
        "city": "Mumbai, Pune, Delhi, Gurgaon",
        "offer": "Upto 10% off"
    }
]

function addColumns() {
  var elem, caption;
  for (var i = 0; i < json.length; i++) {
    elem = '<div class="col-sm-3">'
                +'<div class="block">'
                    +'<img src="'+json[i].image+'">'
                    +'<div class="description">'
                        +'<span>'
                            +'<strong>'+json[i].caption+'</strong>'
                            +'<i class="fa fa-star" aria-hidden="true"></i>'
                            +'<i class="fa fa-star" aria-hidden="true"></i>'
                            +'<i class="fa fa-star" aria-hidden="true"></i>'
                            +'<i class="fa fa-star" aria-hidden="true"></i>'
                        +'</span>'
                        +'<p>'+json[i].city+'</p>'
                        +'<p class="offer">'+json[i].offer+'</p>'
                        +'<span>'
                        +'<i class="fa fa-heart" aria-hidden="true"></i>'
                        +'<button class="btn-btn">Buy Now</button>'
                        +'</span>'
                    +'</div>'
                '</div>'
            +'</div>';
    
    $("#main").append(elem);
  }
}
