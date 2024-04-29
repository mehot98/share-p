package com.sharep.be.modules.issue;

import com.sharep.be.modules.issue.IssueDto.IssueRequestDto;
import com.sharep.be.modules.issue.IssueDto.IssueResponseDto;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class IssueController {

    private final IssueService issueService;

    // TODO: Project의 모든 이슈 조회
    @GetMapping("/issues/{projectId}")
    public ResponseEntity<List<IssueResponseDto>> getIssues(@PathVariable Long projectId) {
        return ResponseEntity.ok(issueService.getIssues(projectId));
    }

//    @GetMapping
    public ResponseEntity<IssueResponseDto> getIssue(Long id) {
        return ResponseEntity.ok(issueService.getIssue(id));
    }

    @PostMapping
    private ResponseEntity<Void> createIssue(
            @RequestBody @Valid IssueRequestDto issueRequestDto) {
        issueService.createIssue(issueRequestDto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


    @PutMapping
    private ResponseEntity<IssueResponseDto> updateIssue() {
        return null;
    }

    @DeleteMapping
    private ResponseEntity<IssueResponseDto> deleteIssue() {
        return null;
    }




}
