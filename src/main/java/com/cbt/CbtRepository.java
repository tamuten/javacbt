package com.cbt;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.cbt.mapper.CbtMapper;

@Repository
public class CbtRepository {

    private final CbtMapper mapper;

    public CbtRepository(CbtMapper mapper) {
        this.mapper = mapper;
    }

    public Cbt findById(Integer id) {
        return mapper.findById(id);
    }

    public List<Cbt> findAll() {
        return mapper.findAll();
    }

    public int create(Cbt cbt) {
        return mapper.create(cbt);
    }

    public int update(Cbt cbt) {
        return mapper.update(cbt);
    }

    public int delete(Integer id) {
        return mapper.delete(id);
    }
}
