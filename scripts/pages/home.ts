$("./body") {
  add_class("mw-home")
	$$("#HomeFeaturedProducts") {
	  	$(".//ul") {
	  		add_class("mw-flex-box")
	  		$("./li") {
	  			add_class("mw-flex-box-item-2")
	  		}
	  	}
	}

	$$("#HomeNewProducts") {
	  	$(".//ul") {
	  		add_class("mw-flex-box")
	  		$("./li") {
	  			add_class("mw-flex-box-item-2")
	  		}
	  	}
	}
 
 	#convert all right column panels to ur carousels
	$(".//div[contains(@class,'Right')]"){
		$("./div[contains(@class,'Panel')]") {
			attribute("data-ur-set","carousel")
			attribute("data-ur-fill","4")

			$(".//ul"){
				attribute("data-ur-carousel-component","scroll_container")
				$("./li"){
					attribute("data-ur-carousel-component","item")
				}
			}
			insert("a",class:"prev ",data-ur-carousel-component:"button",data-ur-carousel-button-type:"prev")
			insert("a",class:"next",data-ur-carousel-component:"button",data-ur-carousel-button-type:"next")
		}
		
	}


}
