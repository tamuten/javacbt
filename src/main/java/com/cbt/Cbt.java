package com.cbt;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class Cbt {
    private Integer id;
    @JsonFormat(pattern = "yyyy/MM/dd HH:mm:ss")
    private LocalDateTime thoughtDateTime;
    private String situation;
    private String feeling;
    private Integer percent;
    private String automaticThinking;
    private String base;
    private String objection;
    private String newThinking;
    private String newFeeling;
    private Integer newPercent;

    @Override
    public String toString() {
        return "id: " + id
                + ", thoughtDateTime:" + thoughtDateTime
                + ", situation:" + situation
                + ", feeling:" + feeling
                + ", percent:" + percent
                + ", automaticThinking:" + automaticThinking
                + ", base:" + base
                + ", objection:" + objection
                + ", newThinking:" + newThinking
                + ", newFeeling:" + newFeeling
                + ", newPercent:" + newPercent;
    }
}
