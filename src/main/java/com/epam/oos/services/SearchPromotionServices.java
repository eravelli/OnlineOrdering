package com.epam.oos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.epam.oos.dao.SearchPromotionDaoInterface;
import com.epam.oos.model.SearchPromotion;

@Service
public class SearchPromotionServices {

	@Autowired
	SearchPromotionDaoInterface searchPromotionDao;

	public List<SearchPromotion> getSearchPromotions() {
		return searchPromotionDao.findAll();
	}

	public SearchPromotion getSearchPromotionById(Long promoId) {
		return searchPromotionDao.findById(promoId).orElse(null);
	}

	public SearchPromotion getSearchPromotionByName(String promoName) {
		return searchPromotionDao.findByPromoName(promoName);
	}

}
