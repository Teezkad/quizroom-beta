"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var news = (function () {
    function news(id, name) {
        this.id = id;
        this.name = name;
    }
    return news;
}());
var tabsComponent = (function () {
    function tabsComponent() {
        this.info = [
            {
                id: 'Random',
                name: 'Nuts'
            }
        ];
    }
    tabsComponent = __decorate([
        core_1.Component({
            selector: "tabs",
            template: "<TabView>\n  <StackLayout *tabItem=\"{title: 'News'}\" >\n          <!-- <Page xmlns:lv=\"nativescript-pro-ui/listview\">\n      \n              <lv:RadListView id=\"listview\" class=\"list-group\"> \n                      <lv:RadListView.listViewLayout>\n                          <lv:ListViewLinearLayout scrollDirection=\"Vertical\"/>\n                      </lv:RadListView.listViewLayout>\n                      <lv:RadListView.itemTemplate  [item] = 'info'> -->\n                          <listview [item]= \"info\">\n                              <ng-template let-item=\"item\">\n                          <StackLayout class=\"list-group-item\">\n                              <Label [text]=\"item.name \" class=\"list-group-item-heading\" ></Label>\n                              <Label [text]=\" item.id\" textWrap=\"true\" class=\"list-group-item-text\" ></Label>\n                          </StackLayout>\n                      </ng-template>\n                      </listview>\n                      <!-- </lv:RadListView.itemTemplate>\n                  </lv:RadListView>\n              \n          </Page> -->\n  </StackLayout>\n  <StackLayout *tabItem=\"{title: 'Info'}\">        \n  </StackLayout>\n  <StackLayout *tabItem=\"{title: 'Providers'}\">\n      <Label text=\"Third ta\"></Label>\n  </StackLayout>\n</TabView>"
        }),
        __metadata("design:paramtypes", [])
    ], tabsComponent);
    return tabsComponent;
}());
exports.tabsComponent = tabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUd6QztJQUNFLGNBQW1CLEVBQVcsRUFBUyxJQUFZO1FBQWhDLE9BQUUsR0FBRixFQUFFLENBQVM7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUUsQ0FBQztJQUN4RCxXQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFpQ0Q7SUFFRTtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUU7WUFDVDtnQkFDRSxFQUFFLEVBQUUsUUFBUTtnQkFDWixJQUFJLEVBQUUsTUFBTTthQUNiO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFUVSxhQUFhO1FBL0J6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLHl6Q0EyQkQ7U0FDVixDQUFDOztPQUNXLGFBQWEsQ0FVekI7SUFBRCxvQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7IC8vIHRvIGhpZGUgYWN0aW9uIGJhclxuXG5jbGFzcyBuZXdze1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQgOiBzdHJpbmcsIHB1YmxpYyBuYW1lOiBzdHJpbmcpe31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhYnNcIixcbiAgdGVtcGxhdGU6IGA8VGFiVmlldz5cbiAgPFN0YWNrTGF5b3V0ICp0YWJJdGVtPVwie3RpdGxlOiAnTmV3cyd9XCIgPlxuICAgICAgICAgIDwhLS0gPFBhZ2UgeG1sbnM6bHY9XCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3XCI+XG4gICAgICBcbiAgICAgICAgICAgICAgPGx2OlJhZExpc3RWaWV3IGlkPVwibGlzdHZpZXdcIiBjbGFzcz1cImxpc3QtZ3JvdXBcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgPGx2OlJhZExpc3RWaWV3Lmxpc3RWaWV3TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bHY6TGlzdFZpZXdMaW5lYXJMYXlvdXQgc2Nyb2xsRGlyZWN0aW9uPVwiVmVydGljYWxcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sdjpSYWRMaXN0Vmlldy5saXN0Vmlld0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICA8bHY6UmFkTGlzdFZpZXcuaXRlbVRlbXBsYXRlICBbaXRlbV0gPSAnaW5mbyc+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlzdHZpZXcgW2l0ZW1dPSBcImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVwiaXRlbS5uYW1lIFwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmdcIiA+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XCIgaXRlbS5pZFwiIHRleHRXcmFwPVwidHJ1ZVwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtLXRleHRcIiA+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGlzdHZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSA8L2x2OlJhZExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvbHY6UmFkTGlzdFZpZXc+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgIDwvUGFnZT4gLS0+XG4gIDwvU3RhY2tMYXlvdXQ+XG4gIDxTdGFja0xheW91dCAqdGFiSXRlbT1cInt0aXRsZTogJ0luZm8nfVwiPiAgICAgICAgXG4gIDwvU3RhY2tMYXlvdXQ+XG4gIDxTdGFja0xheW91dCAqdGFiSXRlbT1cInt0aXRsZTogJ1Byb3ZpZGVycyd9XCI+XG4gICAgICA8TGFiZWwgdGV4dD1cIlRoaXJkIHRhXCI+PC9MYWJlbD5cbiAgPC9TdGFja0xheW91dD5cbjwvVGFiVmlldz5gXG59KVxuZXhwb3J0IGNsYXNzIHRhYnNDb21wb25lbnQge1xuICBpbmZvOiBuZXdzW107XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5pbmZvPSBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnUmFuZG9tJyxcbiAgICAgICAgbmFtZTogJ051dHMnXG4gICAgICB9XG4gICAgXVxuICB9XG59Il19