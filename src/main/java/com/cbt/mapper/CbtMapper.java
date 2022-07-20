package com.cbt.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.cbt.Cbt;

@Mapper
public interface CbtMapper {
  public Long count();
  public List<Cbt> findAll();
  public Cbt findById(Integer id);
  public int create(Cbt cbt);
  public int update(Cbt cbt);
  public int delete(Integer id);
}
