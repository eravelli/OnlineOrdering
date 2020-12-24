package com.epam.oos.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="PROMOTION")
public class SearchPromotion {
	
	
	@Id
	@Column(name="promotion_id")
	private Long promoId;
	@Column(name="promotion_name")
	private String promoName;
	@Column(name="description")
	private String promoDesc;
	@Column(name="logo")	
	private String promoLogo;
	
	
	@Column(name="zone_id")
	private int zoneId;
	
	@Column(name="zone_name")
	private String zoneName;
	/*
	 * @DateTimeFormat(pattern = "dd-MMM-yyyy") private Date startDate;
	 */
	@Column(name="break_date_start")
	@DateTimeFormat(pattern = "dd-MMM-yyyy")
	private Date breakStartDate;
	
	@Column(name="break_date_end")
	@DateTimeFormat(pattern = "dd-MMM-yyyy")
	private Date breakEndDate;
	
	
	public Long getPromoId() {
		return promoId;
	}
	public void setPromoId(Long promoId) {
		this.promoId = promoId;
	}
	public Date getBreakStartDate() {
		return breakStartDate;
	}
	public void setBreakStartDate(Date breakStartDate) {
		this.breakStartDate = breakStartDate;
	}
	public Date getBreakEndDate() {
		return breakEndDate;
	}
	public void setBreakEndDate(Date breakEndDate) {
		this.breakEndDate = breakEndDate;
	}
	
	public String getPromoName() {
		return promoName;
	}
	public void setPromoName(String promoName) {
		this.promoName = promoName;
	}
	public String getPromoDesc() {
		return promoDesc;
	}
	public void setPromoDesc(String promoDesc) {
		this.promoDesc = promoDesc;
	}
	public String getPromoLogo() {
		return promoLogo;
	}
	public void setPromoLogo(String promoLogo) {
		this.promoLogo = promoLogo;
	}
	public int getZoneId() {
		return zoneId;
	}
	public void setZoneId(int zoneId) {
		this.zoneId = zoneId;
	}
	public String getZoneName() {
		return zoneName;
	}
	public void setZoneName(String zoneName) {
		this.zoneName = zoneName;
	}
	@Override
	public String toString() {
		return "SearchPromotion [promoId=" + promoId + ", promoName=" + promoName + ", promoDesc=" + promoDesc
				+ ", promoLogo=" + promoLogo + ", zoneId=" + zoneId + ", zoneName=" + zoneName + ", breakStartDate="
				+ breakStartDate + ", breakEndDate=" + breakEndDate + "]";
	}
	

}
