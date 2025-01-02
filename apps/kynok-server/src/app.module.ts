import { Module } from "@nestjs/common";
import { OrderModule } from "./order/order.module";
import { ProductModule } from "./product/product.module";
import { CartModule } from "./cart/cart.module";
import { CategoryModule } from "./category/category.module";
import { UserModule } from "./user/user.module";
import { GstModule } from "./gst/gst.module";
import { PaymentModule } from "./payment/payment.module";
import { CouponModule } from "./coupon/coupon.module";
import { InventoryModule } from "./inventory/inventory.module";
import { ShippingModule } from "./shipping/shipping.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    OrderModule,
    ProductModule,
    CartModule,
    CategoryModule,
    UserModule,
    GstModule,
    PaymentModule,
    CouponModule,
    InventoryModule,
    ShippingModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
