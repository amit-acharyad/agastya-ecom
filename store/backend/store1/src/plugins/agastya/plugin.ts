import {
  VendurePlugin,
  PluginCommonModule,
  EventBus,
  LanguageCode,
  Logger,
  OrderPlacedEvent,
} from "@vendure/core";
import { OnApplicationBootstrap } from "@nestjs/common";
import { ProductController } from "./product.controller";

@VendurePlugin({
  imports: [PluginCommonModule],
  compatibility: ">2.0.0",
  providers: [Logger],
  controllers: [ProductController],
})
export class StorePlugin implements OnApplicationBootstrap {
  constructor(private eventBus: EventBus) {}

  async onApplicationBootstrap() {
    this.eventBus.ofType(OrderPlacedEvent).subscribe(async (event) => {
      const data = {
        orderId: event.order.id.toString(),
        status: event.order.state,
        shipPostalCode: event.order?.shippingAddress?.postalCode || "",
        shipAddress1: event.order?.shippingAddress?.streetLine1 || "",
        shipCity: event.order?.shippingAddress?.city || "",
        shipCountry: event?.order?.shippingAddress?.country || "",
        shipCountryCode: event?.order?.shippingAddress?.country || "",
        channelSales: event?.order.lines.map((line) => {
          return {
            qty: line.quantity,
            title: line.productVariant?.name,
            sku: line.productVariant.sku,
            price: line.productVariant.price / 10,
            totalprice: line.productVariant.priceWithTax / 10,
            taxamount:
              (line.productVariant.priceWithTax - line.productVariant.price) /
              10,
          };
        }),
        channelId: process.env.SELRO_CHANNEL_ID,
      };
      const response = await fetch("https://localhost:3000/api/v1/new-order", {
        method: "POST",
        body: JSON.stringify({
          origin: event.ctx.req?.originalUrl,
          data: data,
        }),
      });
      const res = await response.json();
      console.log(res);
    });
  }
}
