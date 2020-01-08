import { Component, OnInit } from "@angular/core";
import { ServersService } from "./servers.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  private servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // This piece of code wouldn't work. When you use relativeTo it pastes the "servers" behind the currenct path. But servers/servers doesn't exist.
    // this.router.navigate(["servers"], { relativeTo: this.route });
  }
}
