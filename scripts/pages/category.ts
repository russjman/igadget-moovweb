$("./body") {
	add_class("_category");
	
	$(".//div[contains(@id,'Wrapper')]"){
		log('found wrapper')
		$(".//div[contains(@class, 'Left')]") {
			log('found left')
			$(".//div[contains(@class, 'NewsletterSubscription')]") {
          		#remove()
        	}
			$("./div[contains(@id,'SideShopByBrand')]"){
				attribute("data-ur-set","toggler")
				$("./h2") {
					add_class("mw_bar1")
					attribute("data-ur-toggler-component","button")
					insert("div",class:"mw_indicator")
				}
				$("./div") {
					attribute("data-ur-toggler-component","content")
					$(".//a"){
						insert("div",class:"mw_arrow")
					}
				}

			}
			$("./div[contains(@id,'SideCategoryShopByPrice')]"){
				attribute("data-ur-set","toggler")
				$("./h2") {
					add_class("mw_bar1")
					attribute("data-ur-toggler-component","button")
					insert("div",class:"mw_indicator")
				}
				$("./div") {
					attribute("data-ur-toggler-component","content")
					$(".//a"){
						insert("div",class:"mw_arrow")

					}
				}

			}
		}
	}
}