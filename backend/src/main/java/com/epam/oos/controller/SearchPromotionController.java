package com.epam.oos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.epam.oos.model.SearchPromotion;
import com.epam.oos.services.SearchPromotionServices;

@RestController
public class SearchPromotionController {

	@Autowired
	SearchPromotionServices service;

	@GetMapping("/promotions")
	public List<SearchPromotion> findAllPromotions() {
		return service.getSearchPromotions();

	}

	@GetMapping("/promotionid/{promoId}")
	public SearchPromotion findByPromotionId(@PathVariable Long promoId) {
		return service.getSearchPromotionById(promoId);
	}

	@GetMapping("/promotionname/{promoName}")
	public SearchPromotion findByPromotionName(@PathVariable String promoName) {
		return service.getSearchPromotionByName(promoName);

	}
}
