import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Params, Router, Data } from "@angular/router";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // const id = parseInt(this.route.snapshot.params["id"]);
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(parseInt(params["id"]));
    // });

    this.route.data.subscribe((data: Data) => {
      this.server = data["server"];
    });
  }

  onEdit() {
    // There are two ways to do this. You can just simply say "edit" or you can set the entire path:
    // this.router.navigate(["/servers", this.server.id, "edit"]);
    // When using just edit you do have to set up the relativeTo property
    this.router.navigate(["edit"], {
      relativeTo: this.route,
      queryParamsHandling: "preserve"
    });
  }
}
