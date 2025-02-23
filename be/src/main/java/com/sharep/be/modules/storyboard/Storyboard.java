package com.sharep.be.modules.storyboard;

import com.sharep.be.modules.issue.Issue;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Entity
@NoArgsConstructor
@Getter
public class Storyboard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "screen_issue_id")
    private Issue screenIssue;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "feature_issue_id")
    private Issue featureIssue;

    @Builder
    public Storyboard(Long id, Issue screenIssue, Issue featureIssue) {
        this.id = id;
        this.screenIssue = screenIssue;
        this.featureIssue = featureIssue;
    }
}
