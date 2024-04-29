CREATE SEQUENCE public.scopes_seq;

CREATE TABLE public.scopes (
	id int4 NOT NULL DEFAULT nextval('scopes_seq'::regclass),
	"name" varchar NULL,
	"version" varchar NULL,
	CONSTRAINT scopes_pkey PRIMARY KEY (id)
);

INSERT INTO public.scopes ("name", "version") VALUES ('Java', '21');
