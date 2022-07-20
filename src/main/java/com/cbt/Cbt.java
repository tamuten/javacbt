package com.cbt;

import java.time.LocalDateTime;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class Cbt {
  private Integer id;
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
}
