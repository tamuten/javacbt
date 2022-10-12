package com.cbt;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.cbt.mapper.CbtMapper;

@Repository
public class CbtRepository {

    private final CbtMapper mapper;

    /**
     * オブジェクトを構築する。
     * 
     * @param mapper Cbtマッパー
     */
    public CbtRepository(CbtMapper mapper) {
        this.mapper = mapper;
    }

    /**
     * idをキーに、Cbtオブジェクトを取得する。
     * 
     * @param id ID
     * @return Cbtオブジェクト
     */
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
