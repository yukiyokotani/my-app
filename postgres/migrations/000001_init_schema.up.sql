CREATE TABLE "members" (
  "id" bigserial PRIMARY KEY,
  "name" varchar NOT NULL,
  "age" bigint NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "discographies" (
  "id" bigserial PRIMARY KEY,
  "title" varchar NOT NULL,
  "type" varchar NOT NULL,
  "center_id" bigint NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

ALTER TABLE "discographies" ADD FOREIGN KEY ("center_id") REFERENCES "members" ("id");

CREATE INDEX ON "members" ("name");

CREATE INDEX ON "discographies" ("center_id");
