package com.epam.oos.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.epam.oos.model.RolesAndZones;
import com.epam.oos.model.SearchPromotion;
import com.epam.oos.services.SearchPromotionServices;

@RestController
@CrossOrigin(origins = "http://localhost:4200/", maxAge = 3600)
@ComponentScan("com.epam.oos.model") 
public class SearchPromotionController {

	@Autowired
	SearchPromotionServices service;
	
	/*
	 * @Autowired(required=true) RolesAndZones rolezone;
	 */
	
	/*
	 * @Autowired SearchPromotion searchPromotion;
	 */
	 
	 @PostMapping("/submit")
	 @CrossOrigin("http://localhost:4200/submit")
	 @ResponseBody
	    public List<SearchPromotion> submit(@RequestBody RolesAndZones rolezone,@RequestParam String zone,@RequestParam String role) {
		System.out.print("HIII");
		//rolezone.setZone(rolezone.getZone());
		//rolezone.setRole(rolezone.getRole());
		
		List<SearchPromotion> searchPromotions = service.getSearchPromotions();
		  
		List<SearchPromotion> filerSearchPromotions = new ArrayList<SearchPromotion>();
		
		for (SearchPromotion searchPromotion : searchPromotions) {
		    if(rolezone.getZone().equals(searchPromotion.getZoneName())) {
		    	filerSearchPromotions.add(searchPromotion);
		     }
		 }
		 return filerSearchPromotions;
		
	    }

	@GetMapping("/promotions")
	//@RequestMapping(value = "/promotions", method = RequestMethod.GET)
	//@CrossOrigin("http://localhost:4200/search")
	public List<SearchPromotion> findAllPromotions() {
		

		
		return service.getSearchPromotions();

	}

	@GetMapping("/promotionid/{promoId}")
	public SearchPromotion findByPromotionId(@PathVariable Long promoId) {
		return service.getSearchPromotionById(promoId);
	}

	@GetMapping("/promotionname/{promoName}")
	public List<SearchPromotion> findByPromotionName(@PathVariable String promoName) {
		return service.getSearchPromotionByName(promoName);

	}
}
