import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHandlerService } from 'src/app/services/api-handler.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  apiData: any;

  constructor(private postsService: ApiHandlerService) { }

  ngOnInit(): void {
    this.postsService.fetchDataFromApi().subscribe(data => {
      this.apiData = data;
    })
  }
}
