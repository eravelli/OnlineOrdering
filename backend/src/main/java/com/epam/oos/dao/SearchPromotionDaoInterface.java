package com.epam.oos.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.epam.oos.model.SearchPromotion;

@Repository
public interface SearchPromotionDaoInterface extends JpaRepository<SearchPromotion, Long> {

	SearchPromotion findByPromoName(String promoName);

}
