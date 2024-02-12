terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

provider "docker" {
  host = "unix:///var/run/docker.sock"
}

resource "docker_image" "nginx" {
  name = "nginxdemos/hello:latest"
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.name
  name  = "nginx_hello"

  ports {
    internal = 80
    external = 8000
  }
}
