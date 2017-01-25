$("./body") {
	add_class("_category");
	
	$(".//div[contains(@id,'Wrapper')]"){
		$(".//div[contains(@class, 'Left')]") {
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